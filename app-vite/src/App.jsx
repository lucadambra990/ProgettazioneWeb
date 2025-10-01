import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAlbums from './UserAlbum'
import UserCrud from './UserCrud'
import ToDoApp from './ToDoList/ToDoApp'



function App() {

  return (
    <>
      {/* <UserAlbums></UserAlbums> */}
      {/* <UserCrud></UserCrud> */}
      <ToDoApp></ToDoApp>
    </>
  )
}

export default App;
