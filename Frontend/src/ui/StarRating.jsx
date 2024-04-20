import { FaStarHalf, FaStar, FaRegStar } from "react-icons/fa";

import { genRandomId } from "../utils/helper";

function StarRating({ rating, maxRating, color = "#FFC633", size = "1rem" }) {
  const numFilledStar = Math.floor(rating);
  const numHalfStar = Math.ceil(rating - numFilledStar);
  const numEmptyStar = maxRating - (numFilledStar + numHalfStar);

  return (
    <div>
      <ul className="flex gap-2">
        {Array.from({ length: numFilledStar }).map((star) => (
          <li key={genRandomId()}>
            <FaStar color={color} size={size} />
          </li>
        ))}
        {Array.from({ length: numHalfStar }).map((star) => (
          <li key={genRandomId()}>
            <FaStarHalf color={color} size={size} />
          </li>
        ))}
        {Array.from({ length: numEmptyStar }).map((star) => (
          <li key={genRandomId()}>
            <FaRegStar color={color} size={size} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarRating;
