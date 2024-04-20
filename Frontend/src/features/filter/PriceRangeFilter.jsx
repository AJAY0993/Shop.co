import { useEffect, useState } from "react";
import FilterHeading from "./FilterHeading";
import { Slider } from "antd";
import { useSearchParams } from "react-router-dom";

function PriceRangeFilter() {
  const [minMax, setMinMax] = useState([0, 1000]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    setMinMax(value);
  };

  const handleRange = () => {
    searchParams.set("price[gte]", minMax[0]);
    searchParams.set("price[lte]", minMax[1] * 10);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const timerId = setTimeout(handleRange, 500);
    return () => clearTimeout(timerId);
  }, [minMax]);

  return (
    <div className="my-4">
      <FilterHeading>Price Range</FilterHeading>
      <div>
        <Slider range defaultValue={[20, 50]} onChange={handleChange} />
      </div>
    </div>
  );
}

export default PriceRangeFilter;
