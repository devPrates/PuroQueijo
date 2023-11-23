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
import Redes from './admin/Redes/Redes'
import CadastroProduto from './admin/Produtos/cadastroProduto.jsx'
import UpdateProduto from './admin/Produtos/UpdateProduto.jsx'
import User from './admin/users/User.jsx'
import CadastroUsuario from './admin/users/cadastroProduto.jsx'
import UpdateUser from './admin/users/UpdateUser.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path='/' element={<App />}/>
          <Route path='/Creditos' element={<Creditos />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/admin' element={<Admin />}>
              <Route path='Home' element={<Home />}/>
              <Route path='Empresa' element={<Empresa />} />
              <Route path='Redes' element={<Redes />} />
              <Route path='Produtos' element={<Prod />}/>
              <Route path='cadastrar-produto' element={<CadastroProduto/>}/>
              <Route path='Update-produto/:id' element={<UpdateProduto />}/>
              <Route path='Usuario' element={<User />} />
              <Route path='cadastrar-usuario' element={<CadastroUsuario />}/>
              <Route path='Update-usuario/:id' element={<UpdateUser />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
