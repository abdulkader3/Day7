
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'
import Blogdetails from './Page/Blogdetails.jsx'
import NotFound from './Components/NotFound.jsx'

function App() {

  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='/blogDetails' element={<Blogdetails/>}/>
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
