import List from "../../ui/List";
import OrderItem from "./OrderItem";

function OrderItems({ items }) {
  return (
    <List
      className="flex flex-col gap-2 sm:gap-4"
      items={items}
      render={(item) => <OrderItem item={item} />}
    ></List>
  );
}

export default OrderItems;
