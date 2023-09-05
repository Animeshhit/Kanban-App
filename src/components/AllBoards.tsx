import Task from "../assets/task.svg";
import AddIcon from "../assets/AddIconWhite.svg";
import { useSelector } from "react-redux/es/exports";

const AllBoards = () => {
  const { tasks } = useSelector((state) => state);

  return (
    <>
      <div className="board_list mt-6">
        <p className="text-[gray] tracking-wider px-6">ALL BOARDS ({tasks.length})</p>
        <ul className="mt-6">
          {tasks.map((items) => {
            return `<li className="flex mb-4 items-center w-max py-3 pl-6 pr-14 rounded-r-full bg-[#64CCC5] gap-2 heading-font">
            <img src={Task} alt="task" />
            <span>Platform Launch</span>
          </li>`;
          })}
          {/* <li className="flex mb-4 items-center w-max py-3 pl-6 pr-14 rounded-r-full bg-[#64CCC5] gap-2 heading-font">
            <img src={Task} alt="task" />
            <span>Platform Launch</span>
          </li>
          <li className="flex mb-4 items-center w-max py-3 pl-6 pr-14 rounded-r-full bg-[#64CCC5] gap-2 heading-font">
            <img src={Task} alt="task" />
            <span>Marketing Plan</span>
          </li>
          <li className="flex mb-4 items-center w-max py-3 pl-6 pr-14 rounded-r-full bg-[#64CCC5] gap-2 heading-font">
            <img src={Task} alt="task" />
            <span>Roadmap</span>
          </li> */}
          <button
            type="button"
            className="flex items-center w-max py-3 pl-6 pr-14 rounded-r-full text-[#64CCC5] gap-2 heading-font"
          >
            <span>+</span>
            <p>Create New Board</p>
          </button>
        </ul>
      </div>
    </>
  );
};

export default AllBoards;
