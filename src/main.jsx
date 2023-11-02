import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Creditos from './pages/Creditos.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "Creditos",
    element: <Creditos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
