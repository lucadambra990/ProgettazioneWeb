import { useState } from "react";

const ToDoForm = (onAddTask) => {
const [text,setText]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text)
  }
  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        style={{ width: "80%" }}
        value={text}
        onChange={(e)=>setText(e.target.value)}
      ></input>
      <button className="btn btn-primary">Aggiungi task</button>

    </form>
    
  );
};

export default ToDoForm;