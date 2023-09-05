type PropType = {
  Title: String;
  Details: Number;
};

const Card = (props: PropType) => {
  return (
    <>
      <div className="card bg-[#252B48] rounded-md py-2 px-4 my-3">
        <h2 className="heading-font text-white capitalize">{props.Title}</h2>
        <p className="text-[rgba(255,255,255,0.5)] mt-2">0 of {props.Details.toString()} subtasks</p>
      </div>
    </>
  );
};

export default Card;
