import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Subtitle from "../../ui/Subtitle";
import CartSummaryListItem from "./CartSummaryListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  getSubTotal,
  getDeliveryCharges,
  getDiscount,
  clearCart,
} from "./cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { checkOut } from "../../services/checkoutApi";
import { getIsAuthenticated } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CheckoutForm from "./CheckoutForm";

function CartSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const cartItems = useSelector(getCartItems);
  const subTotal = useSelector(getSubTotal);
  const discount = useSelector(getDiscount);
  const deliveryCharges = useSelector(getDeliveryCharges);
  const [checkingOut, setCheckingOut] = useState(false);
  const totalCartAmount = (subTotal + deliveryCharges - discount).toFixed(2);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    const stripe = await loadStripe(
      "pk_test_51P4fQhSGowosMs9tJozifuX1d39JCzydl9JJbbF5CCX5GpCYJII4eXFbfO26KM7kGpVt7yP1oMDakQNlpL1lDGky00lJWmS5gq",
    );
    setCheckingOut(true);
    const session = await checkOut(cartItems);
    setCheckingOut(false);
    dispatch(clearCart());
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  if (cartItems.length < 1) return null;
  return (
    <div className="flex-grow  self-start rounded-3xl border-2 border-stone-400 px-2 py-2 sm:px-4 md:flex-grow-0">
      <Subtitle>Order summary</Subtitle>
      <ul className="flex flex-col gap-3 py-4">
        <CartSummaryListItem name="subtotal" value={`$${subTotal}`} />
        <CartSummaryListItem
          name="discount"
          value={`$${discount}`}
          color="red-600"
        />
        <CartSummaryListItem
          name="delievery fee"
          value={`$${deliveryCharges}`}
        />
        <CartSummaryListItem name="total price" value={`$${totalCartAmount}`} />
      </ul>
      <Row classes="flex-nowrap gap-2 my-2 ">
        <input
          className="flex flex-grow rounded-full bg-stone-200 px-4 py-2"
          placeholder="Apply promo code"
        />
        <Button type="primary">apply</Button>
      </Row>
      <div className="mx-auto my-2 w-[16rem] md:w-96">
        <Modal>
          <Modal.Open>
            <Button type="primary" enlarge={false}>
              Go to checkout
              <span className="mx-2 transition-all hover:translate-x-8">
                &#8594;
              </span>
            </Button>
          </Modal.Open>
          <Modal.Window>
            <CheckoutForm
              onSubmit={handleCheckout}
              isCheckingOut={checkingOut}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default CartSummary;
