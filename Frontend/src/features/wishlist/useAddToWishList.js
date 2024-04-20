import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addToWishList as addToWishListApi } from "../../services/wishlist";

function useAddToWishList() {
  const queryClient = useQueryClient();
  const { mutate: addToWishList, isPending: isAdding } = useMutation({
    mutationFn: addToWishListApi,
    onSuccess: () => {
      toast.success("Product added to wishlist successfully");
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addToWishList, isAdding };
}

export default useAddToWishList;
