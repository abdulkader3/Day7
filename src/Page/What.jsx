import React from 'react'
import { Link } from 'react-router-dom'
import { TbExternalLinkOff } from 'react-icons/tb'


const What = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-pink-200 rounded-4xl  flex flex-col items-center justify-center gap-10 font-semibold  ">

      <div className="text-7xl"> What else ?  Page </div>
      <p>Nothing Available Yet ?</p>

      <div className="flex items-center gap-1">
        <Link className='' to={"/blog"} > Checkout our Blog page for now  </Link>
      <TbExternalLinkOff />
      </div>
    </div>   
    </>
  )
}

export default What
