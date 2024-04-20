import Subtitle from "../../ui/Subtitle";

function OrderHeader({ id, status }) {
  return (
    <header className="flex justify-between py-2">
      <Subtitle>Order #{id.slice(0, 5)} Status</Subtitle>
      <OrderStatusIndiactor status={status} />
    </header>
  );
}

export function OrderStatusIndiactor({ status }) {
  const bg =
    status === "pending"
      ? "bg-red-700"
      : status === "processing"
        ? "bg-orange-500"
        : status === "shipped"
          ? "bg-yellow-500"
          : "bg-green-700";
  return (
    <span
      className={`rounded-md ${bg} px-4 py-2 align-top capitalize text-neutral-50`}
    >
      {status}
    </span>
  );
}
export default OrderHeader;
