import axios from "axios";

//the api request is bugged for some reason
export default function BotCard(props) {
  const onClickHandler = async () => {
    //navigate to new page with react router
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
    <div className=" flex flex-col items-center justify-around  rounded-md bg-white shadow-xl ">
      <h3 className=""> {props.title} </h3>
      <button onClick={onClickHandler} className="border-2 p-2">
        Run bot
      </button>
      <img className="h-auto w-4/5" src={props.src}></img>
    </div>
  );
}
