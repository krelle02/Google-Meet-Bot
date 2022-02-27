import react, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const titleInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const addCollectionHandler = (e) => {
    e.preventDefault();
    props.setCollectionCards([
      ...props.CollectionCards,
      {
        title: titleInputRef.current.value.trim(),
        img: preview,
        id: uuidv4(),
      },
    ]);
    props.setFormState(!props.formState);
    console.log(props.CollectionCards);
  };

  const uploadFileHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const fileInputHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    }
  };

  return (
    <form
      className="flex h-[100%] w-[80%] flex-col justify-around"
      onSubmit={addCollectionHandler}
    >
      <input
        className="text-center"
        ref={titleInputRef}
        type="text"
        required
        placeholder="Name for collections"
      />
      {preview ? (
        <img className="h-auto w-4/5" src={preview}></img>
      ) : (
        <>
          <button onClick={uploadFileHandler}>Add file</button>
          <input
            className="hidden"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={fileInputHandler}
          />
        </>
      )}
      <button type="submit">
        <i>Create Collection</i>
      </button>
    </form>
  );
};

export default Form;
