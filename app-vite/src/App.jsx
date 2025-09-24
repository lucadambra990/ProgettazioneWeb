import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAlbums from './UserAlbum'
import UserCrud from './UserCrud'
import TodoApp from './ToDoList/ToDoApp'
import ToDoList from './ToDoList/ToDoList'
import ToDoItem from './ToDoList/ToDoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserAlbums></UserAlbums> */}
      {/* <UserCrud></UserCrud> */}
      <TodoApp></TodoApp>
    </>
  )
}

export default App
