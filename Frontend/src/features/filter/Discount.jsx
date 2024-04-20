import { Row } from "antd";
import FilterHeading from "./FilterHeading";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DiscountFilter() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxDiscount, setMaxDiscount] = useState(
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
      setMaxDiscount(Math.max(...checkedBoxes));
    }
    if (checkedBoxes.length < 1) {
      setMaxDiscount(null);
    }
  }, [checkedBoxes]);

  useEffect(() => {
    if (maxDiscount) {
      searchParams.set("discount[gte]", maxDiscount);
    }
    if (!maxDiscount) {
      searchParams.delete("rating[gte]");
    }
    setSearchParams(searchParams);
  }, [maxDiscount, searchParams, setSearchParams]);

  return (
    <div className="my-4">
      <FilterHeading>Discount </FilterHeading>
      <div className="flex flex-col">
        <Row className="items-center gap-2">
          <label className="text-base">20% and above</label>
          <input
            type="checkbox"
            id="20AndAbove"
            className="inline-block"
            value={20}
            onChange={handleChange}
          />
        </Row>
        <Row className="items-center gap-2">
          <label className="text-base">15% and above</label>
          <input
            type="checkbox"
            id="15AndAbove"
            className="inline-block"
            value={15}
            onChange={handleChange}
          />
        </Row>
        <Row className="items-center gap-2">
          <label className="text-base">10% and above</label>
          <input
            type="checkbox"
            id="10AndAbove"
            className="inline-block"
            value={10}
            onChange={handleChange}
          />
        </Row>
      </div>
    </div>
  );
}

export default DiscountFilter;
