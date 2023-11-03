import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Creditos from './pages/Creditos.jsx'
import Home from './admin/Home/Home.jsx'
import NotFound from './pages/ErrorPage.jsx'
import Empresa from './admin/Empresa/Empresa.jsx'
import Login from './pages/Login.jsx'
import Sidebar from './admin/Sidebar/Sidebar.jsx'
import Admin from './pages/Admin.jsx'
import Prod from './admin/Produtos/Prod.jsx'
import Publicacoes from './admin/Publicacoes/Publicacoes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path='/' element={<App />}/>
          <Route path='/Creditos' element={<Creditos />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/admin' element={<Admin />}>
              <Route path='/admin' element={<Home />}/>
              <Route path='Empresa' element={<Empresa />} />
              <Route path='Produtos' element={<Prod />} />
              <Route path='Publicacoes' element={<Publicacoes />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
