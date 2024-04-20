import { FaX } from "react-icons/fa6";

function OrderItem({ item }) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="aspect-square w-10 sm:w-12"
        src={item.product.imageUrl}
        alt={item.product.name}
      />

      <p className="font-medium">{item.product.name}</p>
      <span className="flex items-center gap-2 text-lg font-medium">
        <FaX /> {item.quantity}
      </span>
    </div>
  );
}

export default OrderItem;
