import { NavLink, useLocation } from "react-router-dom"
import "./sidebar.css"
import logo from "/Logo.png"

function Sidebar() {
    const localiza = useLocation();
    return (
        <>
            <section className="sidebar d-flex flex-column gap-5">
                <div className="mx-auto d-flex align-items-center gap-2 mt-2">
                    <img src={logo} alt="" className="sidebar__logo" />
                    <span className="sidebar__titulo">Puro Queijo</span>
                </div>
                <div className=" sidebar__risco"></div>

                <article className="d-flex flex-column gap-3 ">
                    <NavLink className="sidebar__item d-flex gap-2 align-items-center" to="Home" >
                        <i className='bx bx-home'></i>
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="sidebar__item d-flex gap-2 align-items-center" to="Empresa" >
                        <i className='bx bxs-objects-vertical-bottom'></i>
                        <span>Empresa</span>
                    </NavLink>
                    <NavLink className="sidebar__item d-flex gap-2 align-items-center" to="Produtos" >
                        <i className='bx bxs-add-to-queue'></i>
                        <span>Produtos</span>
                    </NavLink>
                    <NavLink className="sidebar__item d-flex gap-2 align-items-center" to="Publicacoes" >
                        <i className='bx bxs-purchase-tag'></i>
                        <span>Publicações</span>
                    </NavLink>
                </article>
            </section>
        </>
    )

}

export default Sidebar