import AddIcon from "../assets/addIcon.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4 px-6 bg-[rgba(0,0,0,0.5)]">
        <div className="navbar_logo text-white heading-font text-2xl">
          Platform Launch
        </div>

        <button
          type="button"
          className="py-3 px-4 rounded-full bg-[#64CCC5] flex items-center justify-center gap-2 hover:bg-[#016A70] transition"
        >
          <img src={AddIcon} alt="add" />
          <span>Add New Task</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
