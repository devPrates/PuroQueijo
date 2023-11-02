import {  useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Creditos(){
    const navigate = useNavigate()
    const voltar = () => {
        return navigate("/")
    }
    return (
        <>
        <Header />
            <h1 className="text-center mt-5">Pagina de Creditos</h1>

            <button className="btn btn-primary mb-5" onClick={voltar}>Voltar</button>
        <Footer />
        </>
    )
}

export default Creditos