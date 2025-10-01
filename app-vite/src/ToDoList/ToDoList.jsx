import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, onDeleteTask,onToggleTask ,onUpdateTask}) => {
    return (
      <ul className="list-group">
        {tasks.map((t) => {
          return (
            <ToDoItem key={t.id} task={t} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} onUpdateTask={onUpdateTask}></ToDoItem>
          );
        })}
      </ul>
    );
  };
  
  export default ToDoList;