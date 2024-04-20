import { formatPrice } from "../../utils/helper";

function ProductPrice({ price }) {
  const netPrice = price.current.value;
  const discount = price.current.discount;
  const discountendPrice = netPrice - (netPrice / 100) * discount;

  return (
    <p className="my-4 flex items-center gap-2 text-sm font-semibold capitalize md:gap-4 md:text-2xl">
      {formatPrice(discountendPrice)}
      <span className="text-stone-400 line-through">
        {formatPrice(netPrice)}
      </span>
      <span className="rounded-full bg-red-100 px-2 py-1 text-[1rem] text-red-400 md:px-6">
        {discount}%
      </span>
    </p>
  );
}

export default ProductPrice;
