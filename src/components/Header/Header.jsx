import "./header.css";
import logo from "/Logo.png"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center gap-3" href="">
                        <img src={logo} alt="Logomarca da Empresa" className="menu_logo"/>
                        <span className="menu_titulo"><span className="titulo_color">Puro</span> Queijo</span>
                    </a>
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
                                    <a className="btn menu_btn" href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" href="#Produtos">Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" href="#Sobre">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn menu_btn" href="#">Contato</a>
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