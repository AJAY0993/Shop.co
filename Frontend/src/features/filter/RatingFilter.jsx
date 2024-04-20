import { Row } from "antd";
import FilterHeading from "./FilterHeading";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RatingFilter() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxRating, setMaxRating] = useState(
    +searchParams.get("rating[gte]") || null,
  );

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedBoxes((s) => [...checkedBoxes, +e.target.value]);
    }
    if (!e.target.checked) {
      setCheckedBoxes((s) => checkedBoxes.filter((v) => v != e.target.value));
    }
  };

  useEffect(() => {
    if (checkedBoxes.length > 0) {
      setMaxRating(Math.max(...checkedBoxes));
    }
    if (checkedBoxes.length < 1) {
      setMaxRating(null);
    }
  }, [checkedBoxes]);

  useEffect(() => {
    if (maxRating) {
      searchParams.set("rating[gte]", maxRating);
    }
    if (!maxRating) {
      searchParams.delete("rating[gte]");
    }
    setSearchParams(searchParams);
  }, [maxRating, searchParams, setSearchParams]);

  return (
    <div className="my-4">
      <FilterHeading>Customer Ratings</FilterHeading>
      <div className="flex flex-col">
        <Row className="items-center gap-2">
          <label className="text-base">4 &#9733; and above</label>
          <input
            type="checkbox"
            id="4AndAbove"
            className="inline-block"
            value={4}
            onChange={handleChange}
            // checked={4 === maxRating}
          />
        </Row>
        <Row className="items-center gap-2">
          <label className="text-base">3 &#9733; and above</label>
          <input
            type="checkbox"
            id="3AndAbove"
            className="inline-block"
            value={3}
            onChange={handleChange}
            // checked={3 === maxRating}
          />
        </Row>
      </div>
    </div>
  );
}

export default RatingFilter;
