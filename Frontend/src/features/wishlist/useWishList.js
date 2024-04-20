import { useQuery } from "@tanstack/react-query";
import { fetchWishList } from "../../services/wishlist";

function useWishList() {
  const {
    data: wishListProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: fetchWishList,
    queryKey: ["wishlist"],
  });
  return { wishListProducts, isLoading, isError, error };
}

export default useWishList;
