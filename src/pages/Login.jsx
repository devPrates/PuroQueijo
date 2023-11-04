import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./pages.css"
import senhas from "../json/senhas.json"
import logo from "/Logo.png"

function Login() {
    const navigate = useNavigate()


    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const autenticar = () => {
        senhas.map(token =>{
            if(nome == token.login && senha == token.senha){
                return navigate("/admin/home")
            }else {
                return alert("Email ou senha incorreto! ")
            }
        })
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