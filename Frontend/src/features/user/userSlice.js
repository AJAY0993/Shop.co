import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    addToWishList: (state, action) => {
      state.user.wishList.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.user.wishList = state.user.wishList.filter(
        (s) => s !== action.payload,
      );
    },
  },
});

export const getLoggedInUser = (state) => state.user.user;
export const getIsAuthenticated = (state) => state.user.isAuthenticated;
export const getWishList = (state) => state.user.user?.wishList;
export const { login, signup, logout, removeFromWishList, addToWishList } =
  userSlice.actions;

export default userSlice.reducer;
