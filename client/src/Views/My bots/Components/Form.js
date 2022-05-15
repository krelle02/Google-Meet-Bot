import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import createBot from "../api/create";

const Form = (props) => {
  const titleInputRef = useRef(null);
  const codeInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

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

  const addBotHandler = (e) => {
    e.preventDefault();

    const data = {
      name: titleInputRef.current.value.trim(),
      code: codeInputRef.current.value.trim(),
      date: dateInputRef.current.value.trim() ,
      time: timeInputRef.current.value.trim(),
      }
    console.log(data)
    props.setBotCards([
      ...props.BotCards,
      {
        title: data.name,
        img: preview,
        id: uuidv4(),
      },
    ]);
    props.setFormState(!props.formState);
    createBot(data)
  
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
      className="flex h-[100%] w-[100%] flex-col items-center justify-around "
      onSubmit={addBotHandler}
    >
      <input
        className="text-center"
        ref={titleInputRef}
        type="text"
        required
        placeholder="Name for bot"
      />
       <input
        className="text-center"
        ref={codeInputRef}
        type="text"
        required
        placeholder="Meet code"
      />

      <p>Enter the time of the meeting:</p>
      <div className="flex flex-col items-center gap-3 w-96">
        <div className="flex justify-around w-52">
          <label>Date:</label>
          <input
            className="text-center"
            ref={dateInputRef}
            type="date"
          /> 
        </div>
        <div className="flex justify-around w-52">
          <label>Time:</label>
          <input
            className="text-center"
            ref={timeInputRef}
            type="time"
          />
        </div>
      </div>
    
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
        <i>Create Bot</i>
      </button>
    </form>
  );
};

export default Form;
