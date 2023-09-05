import Column from "./Column";
import CreateColumn from "./CreateColumn";

const Main = () => {
  return (
    <>
      <div className="flex mt-6 px-4 gap-4">
        <Column Name="Todo" />
        <Column Name="Doing" />
        <Column Name="Done" />
        <CreateColumn />
      </div>
    </>
  );
};

export default Main;
