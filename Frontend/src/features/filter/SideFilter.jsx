import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import DiscountFilter from "./Discount";
import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";
import { cloneElement, createContext, useContext, useState } from "react";
import { FaX } from "react-icons/fa6";

const FilterContext = createContext();

function Filter({ children }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  return (
    <FilterContext.Provider value={{ open, close, setOpen }}>
      {children}
    </FilterContext.Provider>
  );
}

function SideFilter() {
  const { open, close } = useContext(FilterContext);
  return (
    <aside
      className={`b-1 fixed z-0 ${open ? "left-0" : "-left-full"} bottom-0 top-0 z-[10] h-full w-[19rem] border-stone-700 bg-neutral-50 px-4 pt-8 transition-all sm:absolute sm:left-0 sm:top-0 sm:bg-transparent sm:pt-2 md:pt-10 `}
    >
      <button
        className="absolute right-4 top-2 flex aspect-square w-10 items-center justify-center rounded-full bg-stone-950 text-neutral-50 focus:border-0 focus:outline-0 sm:hidden "
        onClick={close}
      >
        <FaX className="text-neutral-50" />
      </button>
      <h4 className=" mb-6 text-lg font-medium">Filters </h4>
      <div className=" flex-col gap-6"></div>
      <CategoryFilter />
      <DiscountFilter />
      <PriceRangeFilter />
      <RatingFilter />
    </aside>
  );
}

function Open({ children }) {
  const { setOpen } = useContext(FilterContext);
  return cloneElement(children, { onClick: () => setOpen((s) => !s) });
}

Filter.Open = Open;
Filter.SideFilter = SideFilter;

export default Filter;
