import { useQuery } from "@tanstack/react-query";
import { fetchMyOrders } from "../../services/orderApi";

function useMyOrders() {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: fetchMyOrders,
    queryKey: ["MyOrders"],
  });
  return { orders, isLoading, isError, error };
}

export default useMyOrders;
