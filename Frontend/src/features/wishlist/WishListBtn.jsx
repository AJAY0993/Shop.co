import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { getIsAuthenticated, getWishList } from "../user/userSlice";
import useAddToWishList from "../wishlist/useAddToWishList";
import useRemoveFromWishList from "./../wishlist/useRemoveFromWishList";
import { removeFromWishList as removeFromWishListReducer } from "../user/userSlice";
import { addToWishList as addToWishListReducer } from "../user/userSlice";
import { IoHeartOutline } from "react-icons/io5";

function WishListBtn({ top, left, right, bottom, productId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { addToWishList, isAdding } = useAddToWishList();
  const { removeFromWishList, isRemoving } = useRemoveFromWishList();
  const wishList = useSelector(getWishList) || [];
  const isLoading = isAdding || isRemoving;
  const wishListed = wishList.some((s) => s === productId);

  function handleClick(e) {
    e.stopPropagation();
    if (!isAuthenticated) return navigate("/login");
    if (wishListed) {
      removeFromWishList(productId, {
        onSuccess: dispatch(removeFromWishListReducer(productId)),
      });
    } else {
      addToWishList(productId, {
        onSuccess: dispatch(addToWishListReducer(productId)),
      });
    }
  }
  return (
    <div className="absolute right-4 top-4">
      {isLoading && <FaSpinner />}

      {!isLoading && wishListed && (
        <HiHeart
          className="cursor-pointer text-xl text-pink-500"
          role="button"
          onClick={handleClick}
        />
      )}
      {!isLoading && !wishListed && (
        <IoHeartOutline
          className="cursor-pointer text-xl"
          role="button"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default WishListBtn;
