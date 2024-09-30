import React from "react";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./Register.jsx";
import './index.css'
import Courses from "./Courses.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Register/>
  },
  {
    path:"/courses",
    element: <Courses/>
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
