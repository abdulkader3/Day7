import React from "react";
import { Link } from "react-router-dom";

const Button = ({buttonText,variant = "classic",path,whatsappNumber,whatsappMessage,isWhatsApp,textColor}) => {


  const variants = {
    classic : "bg-green-400 font-playfair text-shadow-2xs text-white w-[100px] xs:w-[120px] sm:w-[140px] md:w-[180px] h-[35px] xs:h-[40px] md:h-[55px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer",
    Colorful : "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-playfair text-shadow-2xs text-white w-[100px] xs:w-[120px] sm:w-[140px] md:w-[180px] h-[35px] xs:h-[40px] md:h-[55px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer",
    mateFinish : "bg-[#464545dd] font-playfair text-shadow-2xs text-white w-[100px] xs:w-[120px] sm:w-[140px] md:w-[180px] h-[35px] xs:h-[40px] md:h-[55px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer",
    
  }
  
  

  if (isWhatsApp) {
    return (
      <button 
        
        className={` bg-green-400 font-playfair text-shadow-2xs text-white w-[100px] xs:w-[120px] sm:w-[140px] md:w-[180px] h-[35px] xs:h-[40px] md:h-[55px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer `}
      >
        {buttonText} 
      </button>
    );
  }

  return (
    <><Link to={path}>
      <button  className={`${variants[variant]}`} >
        
          {buttonText} 
      </button></Link>
    </>
  );
};

export default Button;
