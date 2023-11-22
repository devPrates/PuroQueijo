import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./pages.css"
import senhas from "../json/senhas.json"
import login from "../assets/loginimagem.png"

function Login() {
    const navigate = useNavigate()


    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const autenticar = () => {
        senhas.map(token => {
            if (nome == token.login && senha == token.senha) {
                return navigate("/admin/home")
            } else {
                return alert("Email ou senha incorreto! ")
            }
        })
    }
    return (
        <>
            <Header />
            <section className="container">
                <article className="login d-flex justify-content-center">
                    <div className="w-50">
                        <img src={login} className="login_imagem" alt="" />
                    </div>
                    <div className="w-50 d-flex flex-column align-items-center justify-content-center">
                        <section className="w-75 d-flex flex-column gap-5">
                            <div>
                                <h1>Faça login na sua conta</h1>
                                <span>Veja o que está acontencendo com seu negócio</span>
                            </div>
                            <div className="w-100">
                                <div class="mb-3">
                                    <label htmlFor="email-login" class="form-label">Email</label>
                                    <input
                                        type="email"
                                        class="form-control w-100"
                                        id="email-login"
                                        placeholder="Digite seu Email"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="senha-login" class="form-label">Senha</label>
                                    <input
                                        type="password"
                                        class="form-control w-100"
                                        id="senha-login"
                                        placeholder="Digite sua senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" htmlFor="flexCheckChecked">Lembrar de mim</label>
                                    </div>
                                    <a href="">Esqueceu sua senha?</a>
                                </div>
                            </div>
                            <button type="submit" className="btn btn_logar" onClick={autenticar}>Logar</button>
                        </section>
                    </div>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default Login

/*
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
                                >
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

*/