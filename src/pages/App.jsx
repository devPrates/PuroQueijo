import { Outlet } from "react-router-dom"
import Sobre from "../components/About/About"
import Contato from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Produtos from "../components/Product/Product"
import ProdutoTeste from "../components/Product/ProdutoTeste"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
import Login from "./Login"

function App() {

  return (
    <>
      
      <Login />
    </>
  )
}

export default App
