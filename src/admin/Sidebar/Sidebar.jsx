import { Link, useLocation } from "react-router-dom"
import "./sidebar.css"
import logo from "/Logo.png"

function Sidebar() {
    const localiza = useLocation();


    const valida = () => {
        var home = document.querySelector("#home")
        var empresa = document.querySelector("#empresa")
        var produtos = document.querySelector("#produtos")
        var publi = document.querySelector("#publi")
        home.classList.toggle("sidebar__active", localiza.pathname === '/admin')
        empresa.classList.toggle("sidebar__active", localiza.pathname === '/admin/Empresa')
        produtos.classList.toggle("sidebar__active", localiza.pathname === '/admin/Produtos')
        publi.classList.toggle("sidebar__active", localiza.pathname === '/admin/Publicacoes')
    }

    return (
        <>
            <section className="sidebar d-flex flex-column gap-5">
                <div className="mx-auto d-flex align-items-center gap-2 mt-2">
                    <img src={logo} alt="" className="sidebar__logo" />
                    <span className="sidebar__titulo">Puro Queijo</span>
                </div>
                <div className=" sidebar__risco"></div>

                <article className="d-flex flex-column gap-3 ">
                    <Link className="sidebar__item d-flex gap-2 align-items-center" to="/admin" onClick={valida} id="home">
                        <i className='bx bx-home'></i>
                        <span>Home</span>
                    </Link>
                    <Link className="sidebar__item d-flex gap-2 align-items-center" to="Empresa" onClick={valida} id="empresa">
                        <i className='bx bxs-objects-vertical-bottom'></i>
                        <span>Empresa</span>
                    </Link>
                    <Link className="sidebar__item d-flex gap-2 align-items-center" to="Produtos" onClick={valida} id="produtos">
                        <i className='bx bxs-add-to-queue'></i>
                        <span>Produtos</span>
                    </Link>
                    <Link className="sidebar__item d-flex gap-2 align-items-center" to="Publicacoes" onClick={valida} id="publi">
                        <i className='bx bxs-purchase-tag'></i>
                        <span>Publicações</span>
                    </Link>
                </article>
            </section>
        </>
    )

}

export default Sidebar