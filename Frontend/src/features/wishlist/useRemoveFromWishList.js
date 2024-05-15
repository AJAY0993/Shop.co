import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeFromWishList as removeFromWishListApi } from "../../services/wishlist";

function useRemoveFromWishList() {
  const queryClient = useQueryClient();
  const { mutate: removeFromWishList, isPending: isRemoving } = useMutation({
    mutationFn: removeFromWishListApi,
    onSuccess: () => {
      toast.success("Product removed from wishlist successfully");
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
  return { removeFromWishList, isPending: isRemoving };
}

export default useRemoveFromWishList;
