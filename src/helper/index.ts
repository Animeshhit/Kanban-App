import { v4 as uuidv4 } from "uuid";
import { DataType, DataTypeDefault } from "../types/DataType";

function generateUniqueId() {
  return uuidv4();
}

export const getBoard = (storageData: any, id: any) => {
  return storageData.find((title: any) => title._id == id);
};

const getData = (): DataType | DataTypeDefault => {
  const dataGotFromStorage = localStorage.getItem("kanbanboard_tasks");
  const DataAfterParsed: DataType | DataTypeDefault = JSON.parse(
    dataGotFromStorage || "[]"
  ); // Provide a default value of "[]" if dataGotFromStorage is null
  return DataAfterParsed;
};

export default generateUniqueId;

export { getData };
