import react, { useRef } from "react";

const Form = (props) => {
  const input = useRef(null);
  const addCollectionHandler = (e) => {
    e.preventDefault();
    props.addCollection([
      ...props.CollectionCards,
      { title: input.current.value },
    ]);
    props.setFormState(!props.formState);
  };
  return (
    <form onSubmit={addCollectionHandler}>
      <input ref={input} type="text" placeholder="Name for collections" />
    </form>
  );
};

export default Form;
