import { createSlice } from "@reduxjs/toolkit";

const getInitialValue = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue;
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

const initialState = {
  currentUser: getInitialValue("currentUser", null),
  userLoginStatus: getInitialValue("isLoggedIn", false),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    setUserLoginStatus: (state, action) => {
      state.userLoginStatus = action.payload;
      localStorage.setItem("isLoggedIn", action.payload);
    },
  },
});

export const { setCurrentUser, setUserLoginStatus } = authSlice.actions;

export default authSlice.reducer;
