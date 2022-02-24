import react, { useRef } from "react";

const Form = (props) => {
  const titleInput = useRef(null);
  const imgInput = useRef(null);

  const addCollectionHandler = (e) => {
    e.preventDefault();
    props.addCollection([
      ...props.CollectionCards,
      { title: titleInput.current.value,
        img: imgInput.current.value,
      },
    ]);
    props.setFormState(!props.formState);
  };
  return (
    <form
      className="flex h-[100%] w-[80%] flex-col justify-around"
      onSubmit={addCollectionHandler}
    >
      <input
        className="text-center"
        ref={titleInput}
        type="text"
        placeholder="Name for collections"
      />
      <input ref={imgInput} className="" type="file" id="avatar"
       accept="image/png, image/jpeg" />
      <button type="submit">
        <i>+</i>
      </button>
    </form>
  );
};

export default Form;
