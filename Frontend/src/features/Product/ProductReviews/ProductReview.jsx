import { FaEllipsisH } from "react-icons/fa";
import P from "../../../ui/P";
import StarRating from "../../../ui/StarRating";
import Subtitle from "../../../ui/Subtitle";
import { formatDate } from "../../../utils/helper";

function ProductReview({ className, review }) {
  return (
    <div
      className={`relative  border-2 border-stone-300 px-3 py-4 ${className} rounded-2xl`}
    >
      <FaEllipsisH className="absolute right-3 top-4 text-stone-500" />
      <StarRating rating={4.5} />
      <Subtitle className="my-1">{review.user.username}</Subtitle>
      <P className="my-0 font-normal">{review.review}</P>

      <P>Posted on {`${formatDate(review.createdAt)}`}</P>
    </div>
  );
}

export default ProductReview;
