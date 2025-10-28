import axios from "axios";
import Cookies from "js-cookie";


const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const ApiDataForBlog = {

  register: async (userData) => {

    const mydata = await api.post("/register", userData)

      .then((res) => {  return res; })

      .catch((err) => console.log(err))
      
      return mydata;
    },

  login: async (userLoginData) => {

    const res = await api.post("/login",userLoginData)

    .then((loginRes)=>{ return loginRes;})
    .catch((err)=>{ console.log(err)})

    return res;
  },

  // blogDetails:async (myId)=>{
  //     const res = await api.get(`/products/${myId}`);

  //     return res.data;
  // }
};
