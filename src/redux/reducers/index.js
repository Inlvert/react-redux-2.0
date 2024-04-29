import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  task: taskReducer,
  user: userReducer,
  car: carReducer
});


export default rootReducer;