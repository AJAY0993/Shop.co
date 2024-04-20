import axios from "../utils/axios";

export const fetchOrder = async (id) => {
  try {
    const res = await axios(`orders/${id}`);
    const data = res.data;
    return data.data.order;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const fetchMyOrders = async () => {
  try {
    const res = await axios(`orders/me`);
    const data = res.data;
    return data.data.orders;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
