
type ActionType = {
  type: String;
};


const PopupReducer = (state = false, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return true;
    case "CLOSE":
      return false;
    default:
      return state;
  }
};

export default PopupReducer;
