import List from "../../ui/List";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function CartItemsContainer() {
  const cartItems = useSelector(getCartItems);

  return (
    <List
      className=" flex-grow-5 divide-y-[1px] rounded-3xl border-2 border-stone-400 p-2 md:p-6 "
      items={cartItems}
      render={(cartItem) => (
        <CartItem
          key={Math.random().toString(36).slice(2, 6)}
          cartItem={cartItem}
        />
      )}
      emptyListItem={<EmptyCart />}
    />
  );
}

export default CartItemsContainer;
