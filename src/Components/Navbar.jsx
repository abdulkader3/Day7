import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className='relative flex justify-between w-full h-[100px] items-center px-4 md:px-6'>
        <div className="Logo w-[50px]"> 
          <img src="photos/logo.png" alt="logo" /> 
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className='md:hidden z-20 p-2'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Navigation Links */}
        <ul className={`
          md:flex md:gap-10 
          ${isMenuOpen 
            ? 'flex flex-col gap-6 absolute top-0 right-0 h-screen w-64 bg-white shadow-lg pt-24 px-6 z-10' 
            : 'hidden'
          }
        `}>
            <li className='text-[17px] font-medium'>
                <Link to="/" onClick={() => setIsMenuOpen(false)}> Home </Link>
            </li>
            <li className='text-[17px] font-medium'>
                <Link to="/service" onClick={() => setIsMenuOpen(false)}> service </Link>
            </li>
            <li className='text-[17px] font-medium'>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}> Blog </Link>
            </li>
            <li className='text-[17px] font-medium'>
                <Link to="/what" onClick={() => setIsMenuOpen(false)}> what els? </Link>
            </li>
            <li className='text-[17px] font-medium'>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}> contact </Link>
            </li>
            <div className="flex gap-4 mt-6 md:mt-0">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-300 hover:text-black hover:font-semibold ">
                        Login
                    </button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-300 hover:text-black hover:font-semibold ">
                        Register
                    </button>
                </Link>
            </div>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
