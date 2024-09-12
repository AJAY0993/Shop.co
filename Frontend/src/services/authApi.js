import axios from "../utils/axios";

export const login = async ({ email, password }) => {
  try {
    const res = await axios("users/login", {
      method: "POST",
      data: {
        email,
        password,
      },
    });
    return res.data.data.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signUp = async ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  try {
    const res = await axios("users/signup", {
      method: "POST",
      data: {
        username,
        email,
        password,
        confirmPassword,
      },
    });
    return res.data.data.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const logout = async () => {
  try {
    await axios("users/logout", {
      method: "POST",
    });
    return null;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
