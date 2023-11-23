import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "/Logo.png"

function Header() {
    const navigate = useNavigate()
    const voltarHome = () => {
        return navigate("/")
    }


    return (
        <>
            <div className="barra-superior">
                <div className="container d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex gap-5 contatos_barra">
                        <div className="d-flex align-items-center gap-2">
                            <i className='bx bxs-phone'></i>
                            <span className="contatos_barra-span">(67) 99144-4444</span></div>
                        <div className="d-flex align-items-center gap-2">
                            <i className='bx bxs-envelope'></i>
                            <span className="contatos_barra-span">exemplo@gmail.com</span>
                        </div>
                    </div>
                    <div className="d-flex gap-3 barra-icons">
                        <i className='bx bxl-instagram-alt' ></i>
                        <i className='bx bxl-facebook-square' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-linkedin-square' ></i>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center gap-3">
                        <img src={logo} alt="Logomarca da Empresa" className="menu_logo" />
                        <span className="menu_titulo"><span className="titulo_color">Puro</span> Queijo</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span className="menu_titulo"><span className="titulo_color">Puro</span> Queijo</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 gap-3">
                                <li className="nav-item">
                                    <a className="btn menu_btn" onClick={voltarHome} href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" onClick={voltarHome} href="#Produto">Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" onClick={voltarHome} href="#Sobre">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" onClick={voltarHome} href="#Contato">Contato</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn_login" to="/login" href="#Contato">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
} 

export default Header