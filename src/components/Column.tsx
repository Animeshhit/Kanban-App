import Card from "./Card";

type propsType = {
  Name: String;
};

const Column = (props: propsType) => {
  return (
    <>
      <div className="w-1/4 px-2">
        <p className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#33BBC5] rounded-full"></div>
          <span className="text-[rgba(255,255,255,0.5)] tracking-widest	">
            {props.Name}
          </span>
        </p>
        <Card Title="This is A Demo Task For Testing Purpose" Details={2} />
        <Card Title="This is A Demo Task For Testing Purpose" Details={2} />
        <Card Title="This is A Demo Task For Testing Purpose" Details={2} />
        <Card Title="This is A Demo Task For Testing Purpose" Details={2} />
        <Card Title="This is A Demo Task For Testing Purpose" Details={2} />
      </div>
    </>
  );
};

export default Column;
