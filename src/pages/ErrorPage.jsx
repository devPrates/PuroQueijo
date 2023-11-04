import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function NotFound() {
    return (
        <>
            <Header />
            <section className="nao_encontrado">
                <div className="text_notfound d-flex flex-column gap-5">
                    <div><h1>Ooops...</h1>
                        <h2>Página não Encontrada</h2>
                    </div>
                    <span>A página que você procura não foi encontrada</span>

                    <Link className="btn btn-danger btn_notfound d-flex justify-content-center align-items-center gap-3" to="/">Voltar <i className='bx bx-right-arrow-alt'></i></Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound