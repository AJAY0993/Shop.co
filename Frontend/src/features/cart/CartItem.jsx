import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Row from "../../ui/Row";
import Button from "./../../ui/Button";
import { addItem, getItemQuantity, removeItem } from "./cartSlice";
import CartController from "./CartController";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ cartItem }) {
  const itemQuantity = useSelector(getItemQuantity(cartItem._id));
  const itemTotalPrice = (itemQuantity * cartItem.price.current.value).toFixed(
    2,
  );

  const dispatch = useDispatch();
  const removeItemFromCart = () => dispatch(removeItem(cartItem._id));
  return (
    <div>
      <Row classes="py-2 gap-[.75rem] md:gap-4 items-center relative">
        <img
          className="aspect-square h-20 rounded-xl object-cover object-top md:h-32"
          src={cartItem.imageUrl}
        />
        <div>
          <h5 className=" max-w-[80%] text-base font-semibold md:text-xl">
            {cartItem.name}
          </h5>
          <p className="text-[.8rem] md:text-base">
            size <span>7</span>
          </p>
          <p className="text-[.8rem] md:text-base">
            color <span>red</span>
          </p>
          <span className="font-semibold md:text-lg">${itemTotalPrice}</span>
        </div>
        <div className="absolute right-2 top-2">
          <Button type="raw">
            <FaTrash
              className="text-stone-600 hover:text-red-600"
              onClick={removeItemFromCart}
            />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 flex flex-col justify-self-end">
          <CartController product={cartItem} />
        </div>
      </Row>
    </div>
  );
}
// function CartItem({ cartItem }) {
//   return (
//     <div>
//       <Row classes="py-2 gap-[.75rem] md:gap-4 items-center relative">
//         <img
//           className="aspect-square h-20 rounded-xl object-cover object-top md:h-32"
//           src={cartItem.imageUrl}
//         />
//         <div>
//           <h5 className=" text-base font-semibold md:text-xl">
//             {cartItem.name}
//           </h5>
//           <p className="text-[.8rem] md:text-base">
//             size <span>7</span>
//           </p>
//           <p className="text-[.8rem] md:text-base">
//             color <span>red</span>
//           </p>
//           <span className="font-semibold md:text-lg">$245</span>
//         </div>
//         <div className="absolute right-2 top-2">
//           <Button type="raw">
//             <FaTrash className="text-stone-600 hover:text-red-600" />
//           </Button>
//         </div>
//         <div className="absolute bottom-2 right-2 flex flex-col justify-self-end">
//           <div className="justify-self-end overflow-hidden">
//             <Button
//               type="decrement"
//               size="sm"
//               onClick={() => addItem({ cart: "item" })}
//             >
//               <FaMinus />
//             </Button>
//             <span className="dinline-block h-full bg-stone-200 px-2 py-3">
//               8
//             </span>
//             <Button type="increment" size="sm">
//               <FaPlus />
//             </Button>
//           </div>
//         </div>
//       </Row>
//     </div>
//   );
// }

export default CartItem;
