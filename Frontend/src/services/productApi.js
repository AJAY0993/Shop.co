import axios from "../utils/axios";

export const fetchProducts = async (query) => {
  const res = await axios(`products${query}`);
  const data = res.data.data;
  return data.products;
};

export const fetchProduct = async (id) => {
  try {
    const res = await axios(`products/${id}`);
    const data = res.data.data;
    return data.product;
  } catch (error) {
    throw new Error("Product Not found");
  }
};
export const searchProducts = async (query) => {
  const res = await axios(`products/s/${query}`);
  const data = res.data.data;
  return data.products;
};
