import axios from "../utils/axios";

export const checkOut = async (items) => {
  const res = await axios("checkout", {
    method: "POST",
    data: { items },
  });
  return res.data.data.session;
};
