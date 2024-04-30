import { createSlice } from "@reduxjs/toolkit";
// import { changeStep, decrement } from "../actions/counterActionCreators";

const SLICE_NAME = "counter";

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + state.step;
    },
    decrement: (state, action) => {
      state.count = state.count - state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const { reducer: counterReducer, actions } = counterSlice;

export const { increment, decrement, reset, changeStep } = actions;

export default counterReducer;
