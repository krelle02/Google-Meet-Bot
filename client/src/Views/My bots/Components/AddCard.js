import { React, useState } from "react";
import Form from "./Form";
const AddCard = (props) => {
  const [formState, setFormState] = useState(false);

  const formStateHandler = () => {
    setFormState(!formState);
  };

  return (
    <div className=" flex flex-col items-center justify-around  rounded-md bg-white shadow-xl  ">
      {formState ? (
        <Form
          CollectionCards={props.CollectionCards}
          setCollectionCards={props.setCollectionCards}
          setFormState={setFormState}
          formState={formState}
        />
      ) : (
        <div className="self-center" onClick={formStateHandler}>
          Add
        </div>
      )}
    </div>
  );
};

export default AddCard;
