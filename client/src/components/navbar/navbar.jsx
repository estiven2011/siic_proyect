import React from 'react'
import {NavLink} from "react-router-dom"
import "./navbar.css"
import {FiLogIn} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"

function Navbar() {
  return (
    <body className=''>
      <nav className=''>
        <ul className='  '>
          <NavLink to="/">
          <li>
            <a>Home</a>
          </li>
          </NavLink>
          <NavLink to="/presentaciones">
          <li>
            <a>Presentaciones</a>
          </li>
          </NavLink>
          <NavLink to="/videos"> 
          <li>
            <a>Videos</a>
          </li>
          </NavLink>
          <NavLink to="/tutoriales">
          <li>
            <a>Tutoriales</a>
          </li>
          </NavLink>
          <NavLink to="/ejercicios">
          <li>
            <a>Ejercicios</a>
          </li>
          </NavLink>
          <NavLink to="/profile">
          <li>
            <a> <AiOutlineUser className='profile text-[1.2rem]'/> </a>
          </li>
          </NavLink>
          <NavLink to="login">
          <li>
            <a> <FiLogIn className=' text-[1.2rem]'/> </a>
          </li>
          </NavLink>
        </ul>
      </nav>
    </body>
  )
}

export default Navbar
