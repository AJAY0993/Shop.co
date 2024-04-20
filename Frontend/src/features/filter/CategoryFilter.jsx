import { useSearchParams } from "react-router-dom";
import Row from "../../ui/Row";
import FilterButton from "./FilterButton";
import FilterHeading from "./FilterHeading";

function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("category") || "all";
  const options = [
    {
      name: "all",
      value: "all",
    },
    {
      name: "shirts",
      value: "shirts",
    },
    {
      name: "jeans",
      value: "jeans",
    },
    {
      name: "shoes",
      value: "shoes",
    },
    {
      name: "accessories",
      value: "accessories",
    },
  ];

  const handleClick = (value) => {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="my-4">
      <FilterHeading>Category</FilterHeading>
      <Row classes="gap-4">
        {options.map((option) => (
          <FilterButton
            active={currentFilter === option.value}
            name={option.name}
            key={option.name}
            onClick={() => handleClick(option.value)}
          />
        ))}
      </Row>
    </div>
  );
}

export default CategoryFilter;
