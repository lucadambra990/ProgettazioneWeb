import React, { useState } from "react";

const ToDoItem = ({ task, onDeleteTask, onToggleTask,onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const handleSave=()=>{
    if(editText.trim()){
       onUpdateTask(task.id,editText)
       setIsEditing(false)
    }else{
      setIsEditing(false)
    }
  }
  return (
    <li className="list-group-item d-flex justify-content-between">
      
        {isEditing ? (
          <input
            type="text"
            className="form-control d-inline-block"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e)=>{e.key==="Enter" && handleSave}}
            style={{width:"300px"}}
          ></input>
        ) : (
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              className="form-check-input me-2"
              onChange={() => {
                onToggleTask(task.id, task.completed);
              }}
            ></input>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onDoubleClick={() => setIsEditing(true)}
            >
              {task.text}
            </span>
         </div>
        )}
      
      <button
        className="btn btn-danger"
        onClick={() => {
          onDeleteTask(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;