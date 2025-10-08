import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Profiles from './Profiles'
import { BrowserRouter, Route, Routes,Link} from "react-router-dom"
import ErrorPage from './ErrorPage'
import SingleProfile from './SingleProfile'
import MyProfile from './MyProfile'
import { routes } from './routers'


const AppRoutes=()=>{
  const elements=useRoutes(routes);
  return elements;
}
const provaRouter = () => {
  return (
    <div className='container-xl'>
      <h1>Router FullStack</h1>
      <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profiles">Profiles</Link>
      </nav>
      <hr></hr>
      <AppRoutes></AppRoutes>
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profiles/" element={<Profiles></Profiles>}>
          <Route path=":id" element={<SingleProfile></SingleProfile>}></Route>
          <Route path="me" element={<MyProfile></MyProfile>}></Route>
        </Route>


        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default provaRouter