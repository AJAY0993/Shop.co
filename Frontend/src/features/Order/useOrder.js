import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../../services/orderApi";

function useOrder() {
  const { id } = useParams();
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => fetchOrder(id),
    queryKey: [`order:${id}`],
  });
  return { order, isLoading, isError, error };
}

export default useOrder;
