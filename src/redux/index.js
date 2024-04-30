import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import taskReducer from "./reducers/taskReducer";
import userReducer from "./reducers/userReducer";
import carReducer from "./reducers/carReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    user: userReducer,
    car: carReducer,
  },
});
export default store;
