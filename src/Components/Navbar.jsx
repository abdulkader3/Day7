import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav className=' flex justify-between w-full h-[100px] items-center '>
        <div className="Logo w-[50px] "> <img src="photos/logo.png" alt="logo" /> </div>

        <ul className='flex gap-10 '>
            <li className='text-[17px] font-medium '>
                <Link to="/"> Home </Link>
            </li>
            <li className='text-[17px] font-medium '>
                <Link to="/service"> service </Link>
            </li>
            <li className='text-[17px] font-medium '>
                <Link to="/blog"> Blog </Link>
            </li>
            <li className='text-[17px] font-medium '>
                <Link to="/what"> what els? </Link>
            </li>
            <li className='text-[17px] font-medium '>
                <Link to="/contact"> contact </Link>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
