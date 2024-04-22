import axios from "../utils/axios";

export const fetchProductReviews = async (id) => {
  try {
    const res = await axios(`products/${id}/reviews`);
    const data = res.data;
    console.log(data);
    return data.data.reviews;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createReview = async ({ id, review }) => {
  try {
    const res = await axios(`products/${id}/reviews`, {
      method: "POST",
      data: {
        review,
      },
    });
    const data = res.data;
    console.log("data :", data);
    return data.data.review;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteReview = async ({ productId, reviewId }) => {
  try {
    await axios(`products/${productId}/reviews/${reviewId}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
