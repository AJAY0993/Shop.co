import { createSlice } from "@reduxjs/toolkit";

// interface Item {
//   color: string;
//   imageUrl: string;
//   name: string;
//   price: {
//     current: {
//
//     },
//     currency: string;
//   };
//   quantity: number;
//   size: string;
//   _id: string;
// }
function storeCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function emptyTheCart() {
  localStorage.setItem("cart", JSON.stringify([]));
}

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
      storeCart(state.cartItems);
      state.totalCartPrice = state.cartItems.reduce(
        (acc, curr) => acc.price + curr,
        0,
      );
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
      storeCart(state.cartItems);
    },
    incrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item._id === action.payload);
      item.quantity++;
      storeCart(state.cartItems);
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item._id === action.payload);
      item.quantity--;
      if (item.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload,
        );
      }
      storeCart(state.cartItems);
    },
    clearCart() {
      emptyTheCart();
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const getCartItems = (state) => state.cart.cartItems;
export const getItemQuantity = (id) => (state) =>
  state.cart.cartItems.find((item) => item._id === id)?.quantity || 0;
export const getSubTotal = (state) =>
  state.cart.cartItems
    .reduce(
      (total, item) => total + item.price.current.value * item.quantity,
      0,
    )
    .toFixed(2);

export const getDeliveryCharges = (state) =>
  getSubTotal(state) > 500 ? 0 : 50;

export const getDiscount = (state) =>
  state.cart.cartItems
    .reduce(
      (totalDiscount, item) =>
        totalDiscount +
        item.price.current.value *
          (item.price.current.discount / 100) *
          item.quantity,
      0,
    )
    .toFixed(2);
export const orderItems = (state) => {
  return state.cart.cartItems.map((cartItem) => ({
    _id: cartItem._id,
    quantity: cartItem.quantity,
  }));
};
export default cartSlice.reducer;
