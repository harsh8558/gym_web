import { useState , useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home"
import Loading from "./Components/Loading"
import Layout from "./Layout";
import About from './Components/About.jsx'
import Facilities from './Components/Facilities.jsx'
import Gallery from './Components/Gallery.jsx'
import Plans from './Components/Plans.jsx'
import Content from "./Components/Content.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Content/>
        },
        {
          path:'/home',
          element:<Content/>
        },
        {
          path:'/about',
          element:<Content/>
        },
        {
          path:'/facilities',
          element:<Content/>
        },
        {
          path:'/gallery',
          element:<Content/>
        },
      ]
    },
    {
      path: '/plans',
      element :<Plans/>
    }

  ])
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading/>):(<RouterProvider router={router}/>)
}

export default App
