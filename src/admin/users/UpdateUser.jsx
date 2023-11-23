import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UpdateUser() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3333/users/" + id)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    const { id } = useParams()

    function criarproduto (e) {
        e.preventDefault();
        
        axios.put("http://localhost:3333/users/" + id, data)
        .then(res =>{
            alert("Produto editado com sucesso")
            navigate('/admin/Usuario')
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
                                className="form-control input_name"
                                value={data.name}   
                                onChange={e => setData({...data, name: e.target.value})}      
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mail" className="form-label label_form">Email Usuario</label>
                            <input
                                type="email"
                                id="mail"
                                className="form-control input_name"
                                value={data.mail}
                                onChange={e => setData({...data, mail: e.target.value})} 
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="url" className="form-label label_form">Url da Imagem do Produto</label>
                            <input
                                type="text"
                                id="url"
                                placeholder="Url da Imagem do Produto"
                                className="form-control input_name"
                                value={data.senha}
                                onChange={e => setData({...data, senha: e.target.value})} 
                            />
                        </div>
                        <input type="submit" value="Salvar Alterações" className="btn btn-success" />
                    </form>
                </article>
            </section>
        </>
    )
}

export default UpdateUser