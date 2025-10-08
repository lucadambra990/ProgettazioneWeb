import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAlbums from './UserAlbum'
import UserCrud from './UserCrud'
import ToDoApp from './ToDoList/ToDoApp'
import ProvaRouter from './ToDoList/router/ProvaRouter'


function App() {

  return (
    <>
      {/* <UserAlbums></UserAlbums> */}
      {/* <UserCrud></UserCrud> */}
      {/* <ToDoApp></ToDoApp> */}
      <ProvaRouter></ProvaRouter>
    </>
  )
}

export default App;
