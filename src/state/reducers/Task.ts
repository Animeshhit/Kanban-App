import { DataType, DataTypeDefault } from "../../types/DataType";
import { getData } from "../../helper";
import { Action } from "redux";

if (localStorage.getItem("kanbanboard_tasks") == null) {
  localStorage.setItem("kanbanboard_tasks", "[]");
}

const taskReducer = (
  state: DataType | DataTypeDefault = getData(),
  action: Action
) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_NEW_BOARD":
    case "CREATE_NEW_CARD":
    case "UPDATE_CARDS":
    case "NEW_TASK":
      return action.payload;
    default:
      return state;
  }
};

export { taskReducer };
