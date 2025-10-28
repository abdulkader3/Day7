import React from 'react'
import { Link } from 'react-router-dom'
import { TbExternalLinkOff } from 'react-icons/tb'
import Button from '../Components/UI/Button/Button.jsx'


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



    <div className="button-demo flex flex-col justify-between">
    

        <div className=" text-3xl  font-semibold mb-10"> Button Demo </div>

        <div className="w-full flex ">

          <div className="w-full flex justify-between ">
          <div className="buttonDemo w-[250px] flex justify-center items-center h-[500px] bg-red-200 rounded-4xl ">
            <Button buttonText={"Demo"}/>
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <div className="buttonDemo w-[250px] flex justify-center items-center h-[500px] bg-yellow-200 rounded-4xl ">
            <Button buttonText={"Demo"} variant='Colorful' />
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <div className="buttonDemo w-[250px] flex justify-center items-center h-[500px] bg-purple-400 rounded-4xl ">
            <Button buttonText={"Demo"} variant='mateFinish' />
          </div>
        </div>

        </div>
    
    </div>   
    </>
  )
}

export default What
