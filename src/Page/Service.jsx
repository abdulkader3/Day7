import React from 'react'
import { Link } from 'react-router-dom'
import { TbExternalLinkOff } from 'react-icons/tb'
import LODING from '../Components/UI/LODING.jsx'


const Service = () => {
  return (
    <>

    <div className="w-full h-[400px] bg-amber-100 rounded-4xl  flex flex-col items-center justify-center gap-10 font-semibold  ">

      <div className="text-7xl"> Service Page </div>
      <p>Nothing Available Yet ?</p>

      <div className="flex items-center gap-1">
        <Link className='' to={"/blog"} > Checkout our Blog page for now  </Link>
      <TbExternalLinkOff />
      </div>
    </div>  

    <div className="w-full">
      <LODING/>
    </div> 
      
    </>
  )
}

export default Service
