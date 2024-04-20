import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderDelivery from "./OrderDielivery";
import OrderSummary from "./OrderSummary";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../user/userSlice";
import useOrder from "./useOrder";
import NoMatchFound from "../../ui/NoMatchFound";

function OrderMain() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { order, isLoading, isError } = useOrder();
  if (isLoading) return <Spinner />;
  if (isError) return <NoMatchFound />;
  return (
    <main>
      {!isAuthenticated && <Navigate to="/login" replace />}
      <OrderHeader status={order.status} id={order._id}/>
      <OrderDelivery date={order.createdAt} />
      <OrderItems items={order.items} />
      <OrderSummary totalAmount={order.totalAmount} />
    </main>
  );
}

export default OrderMain;
