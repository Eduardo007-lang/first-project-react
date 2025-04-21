import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import App from './App'
import TaskPage from './pages/TaskPage';




let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/tasks",
    element: <TaskPage/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />    
  </React.StrictMode>,
)
