import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Register from './components/RegisterPage'
import Confirm from './components/confirmPage'
import { inject } from '@vercel/analytics';
import AboutPage from './components/aboutPage'
 
inject();

const BrowserRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "register/confirm",
    element: <Confirm />,
  },
  {
    path:'/about',
    element: <AboutPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={BrowserRouters} />
  </React.StrictMode>,
)
