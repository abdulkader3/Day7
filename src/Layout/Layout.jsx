import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx'

const Layout = () => {
  return (
    <>

    <div className=" px-5 md:px-20 ">
      <Navbar/>
      <Outlet/>
    </div>
      
    </>
  )
}

export default Layout
