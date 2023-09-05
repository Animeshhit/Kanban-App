import AddIcon from "../assets/AddIconWhite.svg";
const createColumn = () => {
  return (
    <>
      <div className="w-1/4 bg-[#252B48] rounded-md flex items-center justify-center cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <img src={AddIcon} alt="add" />
          <span className="text-white">Create New Board</span>
        </div>
      </div>
    </>
  );
};

export default createColumn;
