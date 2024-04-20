import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../services/productApi";

function useProduct() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => fetchProduct(id),
    queryKey: [`product:${id}`],
    throwOnError: (err) => alert(err.message),
  });
  return { product, isLoading, isError, error };
}

export default useProduct;
