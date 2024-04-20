import axios from "../utils/axios";

export const fetchWishList = async () => {
  try {
    const res = await axios("wishlist");
    return res.data.data.wishList;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addToWishList = async (productId) => {
  try {
    await axios("wishlist", { method: "PATCH", data: { productId } });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const removeFromWishList = async (productId) => {
  try {
    await axios("wishlist", { method: "DELETE", data: { productId } });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
