import React from 'react'
import {NavLink} from "react-router-dom"
import "./navbar.css"
import {FiLogIn} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"

function Navbar() {
  return (
    <body className=''>
      <nav className=' flex justify-end bg-[#1e5096] py-6'>
        <ul className=' duration-300 transition-all font-semibold no-underline flex list-none text-white items-center gap-[5rem] pr-[1%] '>
          <NavLink to="/">
          <li>
            <a className=' hover:border-b-[1px]'>Home</a>
          </li>
          </NavLink>
          <NavLink to="/presentaciones">
          <li>
            <a className=' hover:border-b-[1px]'>Presentaciones</a>
          </li>
          </NavLink>
          <NavLink to="/videos"> 
          <li>
            <a className=' hover:border-b-[1px]'>Videos</a>
          </li>
          </NavLink>
          <NavLink to="/tutoriales">
          <li>
            <a className=' hover:border-b-[1px]'>Tutoriales</a>
          </li>
          </NavLink>
          <NavLink to="/ejercicios">
          <li>
            <a className=' hover:border-b-[1px]'>Ejercicios</a>
          </li>
          </NavLink>
          <NavLink to="/profile">
          <li>
            <a className=' hover:border-b-[1px]'> <AiOutlineUser className='profile text-[1.2rem]'/> </a>
          </li>
          </NavLink>
          <NavLink to="login">
          <li>
            <a className=' hover:border-b-[1px]'> <FiLogIn className=' text-[1.2rem]'/> </a>
          </li>
          </NavLink>
        </ul>
      </nav>
    </body>
  )
}

export default Navbar
