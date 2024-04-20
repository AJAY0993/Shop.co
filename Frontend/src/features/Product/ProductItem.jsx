import { useNavigate } from "react-router-dom";
import ImageModal from "../../ui/ImageModal";
import Modal from "../../ui/Modal";
import StarRating from "../../ui/StarRating";
import ProductPrice from "./ProductPrice";
import WishListBtn from "../wishlist/WishListBtn";

function ProductItem({ product, size }) {
  const navigate = useNavigate();

  const width = size === "sm" ? "w-[10.7rem]" : "w-44";

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/shop/${product._id}`);
  };

  return (
    <Modal>
      <div className="shrink-1 relative w-40 cursor-pointer md:w-72">
        <WishListBtn productId={product._id} />
        <Modal.Open id={product._id}>
          <img
            className={`aspect-square ${width} overflow-hidden rounded-xl bg-stone-200 object-cover object-top md:w-72`}
            src={product.imageUrl}
            alt="product"
          />
        </Modal.Open>
        <div onClick={handleClick}>
          <h4 className="font-bold">{product.name}</h4>
          <StarRating rating={product.rating.rate} maxRating={5} />
          <ProductPrice price={product.price} />
        </div>
      </div>
      <Modal.Window id={product._id}>
        <ImageModal
          images={[product.imageUrl, ...product.additionalImageUrls]}
        />
      </Modal.Window>
    </Modal>
  );
}

export default ProductItem;
