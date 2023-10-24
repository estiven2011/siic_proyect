import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-[#1e5096] py-6'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className='text-white font-bold text-xl'>
            <NavLink to="/">SIIC</NavLink>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleNavbar} className='text-white hover:text-gray-300'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
          <ul className={`md:flex items-center gap-5 pr-1% ${isOpen ? 'block' : 'hidden'}`}>
            <li>
              <NavLink to="/" className='text-white hover:text-gray-300 hover:border-b-1'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/presentaciones" className='text-white hover:text-gray-300 hover:border-b-1'>Presentaciones</NavLink>
            </li>
            <li>
              <NavLink to="/videos" className='text-white hover:text-gray-300 hover:border-b-1'>Videos</NavLink>
            </li>
            <li>
              <NavLink to="/tutoriales" className='text-white hover:text-gray-300 hover:border-b-1'>Tutoriales</NavLink>
            </li>
            <li>
              <NavLink to="/ejercicios" className='text-white hover:text-gray-300 hover:border-b-1'>Ejercicios</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className='text-white hover:text-gray-300 hover:border-b-1'>
                <AiOutlineUser className='profile text-1.2rem' />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className='text-white hover:text-gray-300 hover:border-b-1'>
                <FiLogIn className='text-1.2rem' />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
