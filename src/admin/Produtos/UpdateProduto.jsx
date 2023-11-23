import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UpdateProduto() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3333/produtos/" + id)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    const { id } = useParams()

    function criarproduto (e) {
        e.preventDefault();
        
        axios.put("http://localhost:3333/produtos/" + id, data)
        .then(res =>{
            alert("Produto editado com sucesso")
            navigate('/admin/produtos')
        }).catch(err => console.log(err));
    }

    




    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Editar Produto</h1>
                <article className="cadastro-container">
                    <form onSubmit={(e) => criarproduto(e)} className="w-100 form-dados">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">ID Produto</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome do produto"
                                className="form-control input_name w-25"
                                value={data.id} 
                                disabled        
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome Produto</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome do produto"
                                className="form-control input_name"
                                value={data.nome}   
                                onChange={e => setData({...data, nome: e.target.value})}      
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="sabor" className="form-label label_form">Sabor Produto</label>
                            <input
                                type="text"
                                id="sabor"
                                placeholder="Sabor do produto"
                                className="form-control input_name"
                                value={data.sabor}
                                onChange={e => setData({...data, sabor: e.target.value})} 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label label_form">Descrição</label>
                            <textarea
                                className="form-control input_name"
                                id="descricao"
                                placeholder="Descrição do Produto"
                                value={data.descricao}
                                onChange={e => setData({...data, descricao: e.target.value})} 
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
                                value={data.urlImagem}
                                onChange={e => setData({...data, urlImagem: e.target.value})} 
                            />
                        </div>
                        <input type="submit" value="Salvar Alterações" className="btn btn-success" />
                    </form>
                </article>
            </section>
        </>
    )
}

export default UpdateProduto