export default function CollectionCard(props) {
  return (
    <div className=" flex items-center justify-center rounded-md bg-white shadow-xl ">
      {props.title}
      <img src={props.src}></img>
    </div>
  );
}
