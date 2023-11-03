import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./pages.css"
import logo from "/Logo.png"
import { First } from "react-bootstrap/esm/PageItem"

function Login() {
    const navigate = useNavigate()
    const user = "admin"
    const password = 123456

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const autenticar = () => {
        if(nome == user && senha == password){
            return navigate("/admin/Home")
        } else {
            alert("Email ou senha incoretos")
        }
    }
    return (
        <>
            <Header />
            <section className="login container d-flex justify-content-center">
                <article className="login_content d-flex flex-column w-100 justify-content-center align-items-center mt-5 gap-3">
                    <img src={logo} alt="" className="login__logo" />
                    <h3 className="">Login</h3>
                    <div className="">
                        <div className="input-group mb-2">
                            <span className="input-group-text" id="basic-addon1"><i className='bx bx-user' ></i></span>
                           <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username"
                                value={nome}
                                onChange={(e) =>setNome(e.target.value)}>
                            </input>
                        </div>
                        <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1"><i className='bx bxs-lock'></i></span>
                           <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) =>setSenha(e.target.value)}>
                            </input>
                        </div>
                        <span>Esqueceu sua senha?</span>
                    </div>
                    <button className="btn btn-info" onClick={autenticar}>Logar</button>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default Login