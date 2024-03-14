import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import posts from "./posts/postSlice";

export const store = configureStore({
  reducer: 
  {
    auth,
    posts,
  },
});
