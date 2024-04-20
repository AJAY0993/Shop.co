import axios from "../utils/axios";

export const getAuthenticatedUser = async () => {
  try {
    const res = await axios("users/me");
    return res.data.data.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateMe = async (data) => {
  try {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    const res = await axios("users/me", { method: "PATCH", data: formData });
    return res.data.data.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
