/*
-- Code to send request to server on click --
import axios from "axios";
//the api request is bugged for some reason
export default function CollectionCard(props) {
  const onClickHandler = async () => {
    const reponse = await axios.post("posts/create", {
      body: JSON.stringify({
        name: props.title,
        code: "gie-nfqq-jnv",
        time: 5000,
      }),
    });
    window.alert(`Your bot has been created with: ${reponse}`);
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
*/
