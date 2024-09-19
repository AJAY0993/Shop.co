import { useEffect, useState } from "react";
import ProductItem from "../features/Product/ProductItem";
import Button from "./Button";
import { fetchProducts } from "../services/productApi";

function Slider({ title, query = "" }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts(query)
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="px-4">
      <h2 className="my-4 text-center text-2xl font-extrabold uppercase">
        {title}
      </h2>
      <div className="flex justify-between gap-4 overflow-x-scroll p-3 ">
        {!isLoading &&
          products.map((product) => (
            <ProductItem product={product} key={product.name} />
          ))}
      </div>
      <div className=" mx-auto w-52">
        <Button type="secondary" to="/shop">
          View All
        </Button>
      </div>
    </section>
  );
}

export default Slider;
