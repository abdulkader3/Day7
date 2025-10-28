import React, { useEffect, useState } from "react";
import { ApiDataForBlog } from "../Service/Api.js";
import LODING from "./UI/LODING.jsx";
import { useParams } from "react-router-dom";


const Blogdetails = () => {


  const path  = useParams() 

  console.log(path.blogId)
  
  const [ApiData, setApiData] = useState([]);
  console.log

  console.log(ApiData)

  const [Loading, setLoading] = useState(true);
  
    
  
    useEffect(() => {
      try {
        (async () => {

          const res = await ApiDataForBlog.blogDetails(path.blogId); 

          setApiData(res);

          setLoading(false)
        })();
      } catch (error) {
        setLoading(true)
      }
    }, []);



  return (
    
    <div>
      <div className="w-full  h-screen mt-40">


        {
          Loading? 
          (<LODING/>)
          :
          <div className="full-Blog w-full h-full flex flex-col md:flex-row gap-6 md:gap-20 px-4 md:px-0">
          <div className="photos w-full md:w-1/2">
            <img src={ApiData?.thumbnail} alt="blog-photo" className="w-full h-auto object-cover rounded-lg" />
          </div>

         <div className="w-full md:w-1/2">
           <div className="title font-semibold text-2xl md:text-4xl">
            <h3> {ApiData?.title} </h3>
          </div>

          <div className="key-point flex flex-wrap gap-3 md:gap-5 text-base md:text-[20px] font-medium py-2 md:py-3">
            <h2> {ApiData?.warrantyInformation} </h2>
          </div>

          <div className="blog-summery w-full md:w-[700px]">
            <p className="text-sm md:text-base">
              {
                ApiData?.description
              }
            </p>
          </div>

         </div>

        </div>
         }
        
      
        

        
      </div>
    </div>
  );
};

export default Blogdetails;
