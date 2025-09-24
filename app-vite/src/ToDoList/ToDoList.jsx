import React from 'react'
import ToDoItem from './ToDoItem'

const TodoList = ({ tasks, onDeleteTask }) => {
    return (
      <ul className="list-group">
        {tasks.map((t) => {
          return (
            <TodoItem key={t.id} task={t} onDeleteTask={onDeleteTask}></TodoItem>
          );
        })}
      </ul>
    );
  };
  
  export default TodoList;