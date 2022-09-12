import React,{ useState } from 'react';
import {Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Contactus from './components/Contactus';
import {FcLinux} from 'react-icons/fc'
import Admin from './components/Admin';
import {BsFillCartFill} from 'react-icons/Bs'
import { IconContext } from "react-icons";
function App(){
return (
    
    <div>
    <div className='content-wrap'>
      {/* links to routes */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">

        <li className="nav-item">
        <NavLink className="nav-link text-warning text-capitalize mb-2 mt-0" to="Login" ><FcLinux/>MCQ'S</NavLink>
          </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="contactus" >Contactus</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Signup" >Sign up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Login" >Login</NavLink>
              </li>
              
              
              
              

            </ul>

          </div>
        </div>
      </nav>
      
      {/* define routes for its children */}
      <Routes>
        {/* route for Home component */}
        <Route path="/Home" element={<Home />} />  
        <Route path="/Admin" element={<Admin />} />  
        <Route path="/Contactus" element={<Contactus />} />  
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
         {/* route for Cartcomponent */}
        
      </Routes>


    </div>
   
  </div>



  );
}

export default App;