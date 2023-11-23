import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


function CadastroProduto() {
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({
        nome: '',
        sabor: '',
        descricao: '',
        url: ''
    })

    function criarproduto (e) {
        e.preventDefault();
        
        axios.post('http://localhost:3333/produtos', inputData)
        .then(res =>{
            alert("Produto Cadastrado com sucesso")
            navigate('/admin/produtos')
        }).catch(err => console.log(err));
    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Cadastrar Produto</h1>
                <article className="cadastro-container">
                    <form onSubmit={(e) => criarproduto(e)} className="w-100 form-dados">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome Produto</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome do produto"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, nome: e.target.value})}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="sabor" className="form-label label_form">Sabor Produto</label>
                            <input
                                type="text"
                                id="sabor"
                                placeholder="Sabor do produto"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, sabor: e.target.value})}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label label_form">Descrição</label>
                            <textarea
                                className="form-control input_name"
                                id="descricao"
                                placeholder="Descrição do Produto"
                                onChange={e =>setInputData({...inputData, descricao: e.target.value})}
                                rows="3">
                            </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="url" className="form-label label_form">Url da Imagem do Produto</label>
                            <input
                                type="text"
                                id="url"
                                placeholder="Url da Imagem do Produto"
                                className="form-control input_name"
                                onChange={e =>setInputData({...inputData, url: e.target.value})}
                            />
                        </div>
                        <input type="submit" value="Cadastrar Produto" className="btn btn-success" />
                    </form>
                </article>
            </section>
        </>
    )
}

export default CadastroProduto