import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <>
            <section className="barra d-flex justify-content-end  w-100">
                <div className="barra__itens d-flex gap-2 align-items-center mx-3">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pesquisar">
                        </input>
                        <span className="input-group-text" id="basic-addon1">
                            <i className='bx bx-search-alt-2'></i>
                        </span>
                    </div>
                    <Link className="btn barra__btn d-flex align-items-center gap-1" to="/">
                        <i className='bx bx-user-pin' ></i> Sair
                    </Link>
                    <div className="d-flex h-100 gap-2">
                        <i className='bx bxs-user-circle fs-1' ></i>
                        <div className="user-text d-flex flex-column gap-0">
                            <span>Administrador</span>
                            <samp>admin@puroqueijo.com</samp>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar