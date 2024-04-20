import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/productApi";

function useProducts() {
  const location = useLocation();
  let query = location.search;
  query = query.replace("category=all", "");
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ["products", query],
    keepPreviousData: true,
  });
  return { products, isLoading, isError };
}

export default useProducts;
