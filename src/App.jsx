
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'
import Blogdetails from './Components/Blogdetails.jsx'
import NotFound from './Components/NotFound.jsx'
import Blog from './Page/Blog.jsx'
import Service from './Page/Service.jsx'
import What from './Page/What.jsx'
import Contact from './Page/Contact.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import Login from './Page/User/Auth/Login.jsx'
import Register from './Page/User/Auth/Register.jsx'




function App() {

  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>

        <Route path='/blogDetails/:blogId' element={<Blogdetails/>}/> 

        <Route path='/service' element={<Service/>}/>
        <Route path='/what' element={<What/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        
        </Route>

      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={shanto}/>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
/>
     
    </>
  )
}

export default App
