import { FaEllipsisH } from "react-icons/fa";
import P from "../../ui/P";
import StarRating from "../../ui/StarRating";
import Subtitle from "./../../ui/Subtitle";

function ProductReview({ className }) {
  return (
    <div
      className={`relative  border-2 border-stone-300 px-3 py-4 ${className} rounded-2xl`}
    >
      <FaEllipsisH className="absolute right-3 top-4 text-stone-500" />
      <StarRating rating={4.5} />
      <Subtitle className="my-1">Lorem ipsum</Subtitle>
      <P className="my-0 font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro
        perspiciatis corrupti eaque tenetur quas in vitae enim, blanditiis
        reprehenderit dicta asperiores quasi consectetur neque fuga tempore sed
        reiciendis numquam.
      </P>

      <P>Posted on August 2023</P>
    </div>
  );
}

export default ProductReview;
