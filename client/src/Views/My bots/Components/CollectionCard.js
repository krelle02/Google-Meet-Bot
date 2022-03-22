
export default function CollectionCard(props) {

  const onClickHandler =  async () => {
    const reponse = await fetch("/posts/create", {
      method: "POST",
      body: JSON.stringify({
          name: props.title,
          code: "gie-nfqq-jnv",
          time: 5000,
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
    window.alert(`Your bot has been created with: ${reponse}`)
  }

  return (
    <div onClick={onClickHandler} className=" flex flex-col items-center justify-around  rounded-md bg-white shadow-xl ">
      <h3 className=""> {props.title} </h3>
      <img className="h-auto w-4/5" src={props.src}></img>
      
    </div>
  );
}
