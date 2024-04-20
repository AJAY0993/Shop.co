import List from "../../ui/List";
import NoMatchFound from "../../ui/NoMatchFound";
import Spinner from "../../ui/Spinner";
import ProductItem from "../Product/ProductItem";

function ShopContainer({ isLoading, products }) {
  if (isLoading) {
    return (
      <div className="h-full min-h-80 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <List
      items={products}
      render={(product) => (
        <ProductItem size="sm" product={product} key={product._id} />
      )}
      className="flex max-w-[60.5rem] flex-wrap justify-center gap-4 py-2 sm:ml-[19rem] md:justify-between"
      emptyListItem={<NoMatchFound />}
    />
  );
}

export default ShopContainer;
