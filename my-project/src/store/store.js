import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // Import the auth reducer

const store = configureStore({
  reducer: {
    auth: authSlice,
  }
});

export default store;