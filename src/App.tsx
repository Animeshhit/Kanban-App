import Navbar from "./components/Navbar";
import Logo from "./assets/logo.svg";
import AllBoards from "./components/AllBoards";
import Main from "./components/Main";
const App = () => {
  return (
    <>
      <div className="flex">
        <div className="layout-left w-1/5 h-screen bg-[rgba(0,0,0,0.5)]">
          <div className="layout_left_navbar flex items-center px-6 text-2xl py-6 text-white gap-2">
            <img className="text-4xl" src={Logo} alt="logo" />
            <span className="font-bold heading-font">Kanban</span>
          </div>
          <AllBoards />
        </div>
        <div className="layout-right w-4/5">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
