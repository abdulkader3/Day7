
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

function App() {

  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogDetails' element={<Blogdetails/>}/>
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
     
    </>
  )
}

export default App
