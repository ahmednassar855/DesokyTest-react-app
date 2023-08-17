import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'


import Home from './components/home/Home';
import ContactUs from './components/contactUs/ContactUs';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Layout from './Layout/Layout';
import News from './components/news/News';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/news",
        element: <News/>
      }
    ]
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
