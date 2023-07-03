import { configureStore } from "@reduxjs/toolkit";
import SessionReducer from "./session.reducer";

export default configureStore({
  reducer: {
    SessionReducer,
  },
});
