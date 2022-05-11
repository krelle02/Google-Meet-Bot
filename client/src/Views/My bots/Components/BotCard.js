import axios from "axios";

//the api request is bugged for some reason
export default function CollectionCard(props) {
  const onClickHandler = async () => {
    //navigate to new page with react router
  };

  return (
    <div
      onClick={onClickHandler}
      className=" flex flex-col items-center justify-around  rounded-md bg-white shadow-xl "
    >
      <h3 className=""> {props.title} </h3>
      <img className="h-auto w-4/5" src={props.src}></img>
    </div>
  );
}
