import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const API_URL = "/api/tasks";
const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoanding] = useState("");
  const [error, setError] = useState(null);

  const getTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Errore nella fetch");
      const data = await response.json();

      setTasks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoanding(false);
    }
  };
  const addTask = async (text) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    });
    getTasks();
  };
  const deleteTask = async (id) => {
    await fetch(API_URL + "/" + id, { method: "DELETE" });
    getTasks();
  };

  const toggleTask = async (id, completed) => {
    await fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    getTasks();
  };

  const updateTask = async (id, text) => {
    await fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    getTasks();
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      TodoApp
      <ToDoForm onAddTask={addTask}></ToDoForm>
      <ToDoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onUpdateTask={updateTask}
      ></ToDoList>
    </div>
  );
};

export default ToDoApp;