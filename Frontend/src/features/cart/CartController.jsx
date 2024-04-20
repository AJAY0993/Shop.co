import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  getItemQuantity,
} from "./cartSlice";

function CartController({ product }) {
  const itemQuantity = useSelector(getItemQuantity(product._id));
  const dispatch = useDispatch();

  if (itemQuantity === 0) return null;
  return (
    <div className="overflow-hidden">
      <Button
        type="decrement"
        onClick={() => dispatch(decrementQuantity(product._id))}
      >
        <FaMinus />
      </Button>
      <span className="dinline-block h-full bg-stone-200 px-2 py-3">
        {itemQuantity}
      </span>
      <Button
        type="increment"
        onClick={() => dispatch(incrementQuantity(product._id))}
      >
        <FaPlus />
      </Button>
    </div>
  );
}

export default CartController;
