import Container from "../../ui/Container";
import Filter from "../filter/SideFilter";
import SideFilter from "../filter/SideFilter";
import Sorter from "../filter/Sorter";
import ShopContainer from "./ShopContainer";
import ShopHeader from "./ShopHeader";
import useProducts from "./../Product/useProducts";
import { useState } from "react";
import Pagination from "../pagination/Pagination";

function Shop() {
  const [sortBy, setSortBy] = useState("price");
  const { products, isLoading } = useProducts();

  const sortedProducts =
    products?.length > 0
      ? products.sort((a, b) => {
          if (sortBy === "price") {
            return a.price.current.value - b.price.current.value;
          }
          if (sortBy === "-price") {
            return b.price.current.value - a.price.current.value;
          }
          if (sortBy === "rating") {
            return a.rating.rate - b.rating.rate;
          }
          if (sortBy === "-rating") {
            return b.rating.rate - a.rating.rate;
          }
        })
      : [];
  return (
    <Filter>
      <Container className="flex divide-x-2">
        <SideFilter />
        <div className="relative flex-grow px-2">
          <Filter.Open>
            <button className=" sm:hidden">filter</button>
          </Filter.Open>

          <Sorter right="1rem" top=".5rem" setSort={setSortBy} />
          <ShopHeader />
          <Filter.SideFilter />
          <ShopContainer products={sortedProducts} isLoading={isLoading} />
          <Pagination />
        </div>
      </Container>
    </Filter>
  );
}

export default Shop;
