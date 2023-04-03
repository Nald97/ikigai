import { createSlice } from "@reduxjs/toolkit";

const getInitialValue = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue;
  const value = localStorage.getItem(key);

  if (key === "userEmail") {
    return value && value !== "undefined" ? value : defaultValue;
  }

  if (value && value !== "undefined") {
    return JSON.parse(value);
  } else {
    return defaultValue;
  }
};

const initialState = {
  currentUser: getInitialValue("currentUser", null),
  userLoginStatus: getInitialValue("isLoggedIn", false),
  userEmail: getInitialValue("userEmail", null),
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
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
      localStorage.setItem("userEmail", action.payload);
    },
  },
});

export const { setCurrentUser, setUserLoginStatus, setUserEmail } =
  authSlice.actions;

export default authSlice.reducer;
