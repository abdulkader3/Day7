import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiDataForBlog } from "../Service/Api.js";
import BUTTON from "../Components/UI/BUTTON.jsx";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LODING from "../Components/UI/LODING.jsx";

const Blog = () => {
  const [ApiData, setApiData] = useState([]);
  
  const [Loading, setLoading] = useState(true);


  const [buttonHandlerSate , setButtonHandlerSate] = useState()

  const navigate = useNavigate()
 

  const buttonHandler = (e)=>{
    setButtonHandlerSate(e)

    console.log(e)
    navigate(`/blogDetails/${e}`)

  }


  



  useEffect(() => {

    const fetchData = async () => {

      try {
        
        setLoading(false);
        const res = await ApiDataForBlog.blog();

        setApiData(res.products);

      } catch (error) {
        setLoading(false);
        toast.error("Failed to load blogs. Please try again!", {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
          transition: Bounce,
        });

      }

    };

    fetchData();
  }, []);


  return (
    <>
      <ToastContainer />
      <div className="w-full min-h-screen flex justify-center mt-20">
        <div className="all-Blog md:w-[80%] w-full ">
          <div className="mb-10">
            <h1 className=" text-[25px] md:text-3xl font-semibold text-left">Blog</h1>
            <p className=" text-[14px] md:text-[17px] font-medium">
              {ApiData[0]?.shippingInformation}
            </p>
          </div>

          <div className={`for-map w-full flex flex-col gap-3 md:gap-5 ${Loading && `gap-20 `} `}>
            {/* Loading state */}
            {Loading ? Array.from({length : 10}).map((_,index)=>(
               <LODING key={index}/>
            )) : (
              ApiData.map((dummyJson) => (
                <div key={dummyJson.id} className="blog-box flex flex-col gap-10 shadow">
                  <div className="photo w-[150px] md:w-[350px]">
                    <img src={dummyJson?.thumbnail} alt="blog-photos" />
                  </div>

                  <div className="blog-text">
                    <h3 className="font-semibold text-[18px] md:text-2xl">
                      {dummyJson?.title}
                    </h3>

                    <div className="key-point flex gap-5 text-[14px] md:text-[17px] font-medium py-3">
                      <h2>{dummyJson?.warrantyInformation}</h2>
                    </div>

                    <div className="blog-summery w-[250px] md:w-[400px]">
                      <p>{dummyJson?.description}</p>
                    </div>

                    <div className="button py-5">
                      <button onClick={()=> buttonHandler(dummyJson.id)} >
                        <BUTTON button_title={"Blog details"} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
