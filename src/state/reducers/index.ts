import { combineReducers } from "redux";
import { taskReducer } from "./Task";

const reducers = combineReducers({
  tasks: taskReducer,
});

export default reducers;
