import { useEffect, useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const API_URL="/api/tasks";
const TodoApp = () => {
    const [tasks,setTasks]=useState([]);
    const [loading,setLoanding]=useState("");
    const [error,setError]=useState(null);
   
    const getTasks=async ()=>{
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            if(!response.ok) throw Error("Errore nella fetch");
            setTasks(data);
        }catch(err){
            setError(err)
        }finally{
            setLoanding(false);
        }
    }
    const deleteTask=async (id)=>{
        await fetch(API_URL+"/"+id,{method:"DELETE"});
          getTasks();
    }

    const toggleTask=async (id,completed)=>{
        await fetch(API_URL+"/"+id, {
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({completed:!completed})
        });
        getTasks();
    }
    useEffect(()=>{
        getTasks()
    },[]);
  return (
    <div>TodoApp
        <TodoForm></TodoForm>
        <TodoList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask}></TodoList>
    </div>
  )
}

export default TodoApp