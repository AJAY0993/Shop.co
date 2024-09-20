import Spinner from "../../ui/Spinner";
import List from "./../../ui/List";
import NoMatchFound from "./../../ui/NoMatchFound";
import useMyOrders from "../Order/useMyOrders";
import OrderHeader from "../Order/OrderHeader";
import Title from "../../ui/Title";

function UserOrders() {
  const { orders, isLoading } = useMyOrders();
  if (isLoading) return <Spinner />;
  return (
    <div className="w-full space-y-4">
      <Title align="left">Your Past Orders</Title>
      <List
        className=""
        items={orders}
        render={(order) => (
          <OrderHeader
            status={order.status}
            id={order._id}
            createdAt={order.createdAt}
          />
        )}
        emptyListItem={
          <NoMatchFound message="You have not ordered anything yet start ordering now" />
        }
      />
    </div>
  );
}

export default UserOrders;
