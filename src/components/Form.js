import { useState } from "react";

function Form({onAddItem}){
  const [title , setTitle] = useState("");

  function handleSubmit(){

    if(!title) return;

    const newData = {
      id : Date.now(),
      title,
      done : false
    };

    console.log(newData);
    

    onAddItem(newData);
    setTitle("");

  }

  return (
    <div className="add-form">
      <h3>Ada yang mau di catat?</h3>
        <input
          type="text"
          value = {title}
          onChange={(e) => 
            setTitle(e.target.value)
          }
        />
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Form;