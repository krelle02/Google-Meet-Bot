import { React, useState } from "react";
import Form from "./Form";
const AddCard = (props) => {
  const [formState, setFormState] = useState(false);

  const formStateHandler = () => {
    setFormState(!formState);
  };
  if (formState)
    return (
      <Form
        CollectionCards={props.CollectionCards}
        addCollection={props.setCollectionCards}
        setFormState={setFormState}
        formState={formState}
      />
    );
  else
    return (
      <div
        onClick={formStateHandler}
        className=" flex items-center justify-center rounded-md bg-white shadow-xl "
      >
        Add
      </div>
    );
};

export default AddCard;
