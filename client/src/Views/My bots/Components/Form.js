import react from "react";

const Form = (props) => {
    const addCollectionHandler = () => {
    props.addCollection([...props.CollectionCards, "somth"]);
    props.setFormState(!props.formState);
  };
    return (
     <form onSubmit={addCollectionHandler} >
        <input type="text" placeholder="Name for collections"/>
     </form>
    )
}

export default Form