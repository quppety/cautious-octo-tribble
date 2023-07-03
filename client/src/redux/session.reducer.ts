import { AnyAction } from "@reduxjs/toolkit";
import { stateType } from "../types/reduxTypes";
import { ADD_USER, DEL_USER } from "./payload.types";

const initialState: stateType = {
  username: "",
};

const SessionReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return { ...state, username: payload };
    case DEL_USER:
      return { ...state, username: "" };
    default:
      return state;
  }
};

export default SessionReducer;
