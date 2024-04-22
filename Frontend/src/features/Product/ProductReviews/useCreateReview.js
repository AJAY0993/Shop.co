import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview as createReviewApi } from "../../../services/reviewApi";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function useCreateReview() {
  const { id } = useParams();
  const client = useQueryClient();
  const { mutate: createReview, isPending: isCreating } = useMutation({
    mutationFn: createReviewApi,
    onSuccess: () => {
      toast.success("Review created successfully");
      client.invalidateQueries({
        queryKey: [`reviews:${id}`],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createReview, isCreating };
}

export default useCreateReview;
