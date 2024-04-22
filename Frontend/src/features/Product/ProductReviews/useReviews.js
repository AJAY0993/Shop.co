import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductReviews } from "../../../services/reviewApi";

function useReviews() {
  const { id } = useParams();
  const { data: reviews, isLoading } = useQuery({
    queryFn: () => fetchProductReviews(id),
    queryKey: [`reviews:${id}`],
  });
  return { reviews, isLoading };
}

export default useReviews;
