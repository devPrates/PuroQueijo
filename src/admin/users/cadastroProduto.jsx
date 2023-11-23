import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


function CadastroUsuario() {
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({
        name: '',
        mail: '',
        senha: '',
    })

    function criarproduto (e) {
        e.preventDefault();
        
        axios.post('http://localhost:3333/users', inputData)
        .then(res =>{
            alert("Usuario cadastrado com sucesso")
            navigate('/admin/Usuario')
        }).catch(err => console.log(err));
    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Cadastrar Usuario</h1>
                <article className="cadastro-container">
                    <form onSubmit={(e) => criarproduto(e)} className="w-100 form-dados">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome do Usuario</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome do Usuario"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, name: e.target.value})}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label label_form">Sabor Produto</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email do Usuario"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, mail: e.target.value})}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Senha" className="form-label label_form">Senha</label>
                            <input
                                type="password"
                                id="Senha"
                                placeholder="Senha"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, senha: e.target.value})}
                            />
                        </div>
                        <input type="submit" value="Cadastrar Usuario" className="btn btn-success" />
                    </form>
                </article>
            </section>
        </>
    )
}

export default CadastroUsuario