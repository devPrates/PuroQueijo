import "./empresa.css"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


function Empresa() {
    const navigate = useNavigate()
    const [dataEmpresa, setDataEmpresa] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3333/empresa")
            .then((res) => {
                console.log(res.data)
                setDataEmpresa(res.data[0])
            })
            .catch((err) => console.error(err))
    }, [])


    function editarEmpresa (e) {
        e.preventDefault();
        
        axios.put("http://localhost:3333/empresa/" + 1, dataEmpresa)
        .then(res =>{
            alert("Dados da empresa Atualizados com sucesso")
            navigate('/admin/Home')
        }).catch(err => console.log(err));
    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Dados da Empresa</h1>
                <article className="d-flex gap-5 empresa_container">

                    <form onSubmit={(e) => editarEmpresa(e)} className="w-100 form-dados ">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome Fantasia</label>
                            <input
                                type="text"
                                id="nome"
                                className="form-control input_name"
                                value={dataEmpresa.nomeFantasia}
                                onChange={e => setDataEmpresa({...dataEmpresa, nomeFantasia: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label label_form">Celular</label>
                            <input
                                type="text"
                                id="celular"
                                className="form-control input_name"
                                value={dataEmpresa.celular}    
                                onChange={e => setDataEmpresa({...dataEmpresa, celular: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label label_form">Numero de Telefone</label>
                            <input
                                type="text"
                                id="telefone"
                                className="form-control input_name" 
                                value={dataEmpresa.Telefone}
                                onChange={e => setDataEmpresa({...dataEmpresa, Telefone: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label label_form">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control input_name" 
                                value={dataEmpresa.Email}
                                onChange={e => setDataEmpresa({...dataEmpresa, Email: e.target.value})}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="cnpj" className="form-label label_form">CNPJ</label>
                            <input
                                type="text"
                                id="cnpj"
                                className="form-control input_name"  
                                value={dataEmpresa.cnpj}
                                onChange={e => setDataEmpresa({...dataEmpresa, cnpj: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="missao" className="form-label label_form">Missão</label>
                            <textarea 
                                className="form-control input_name" 
                                id="missao"  
                                rows="3"
                                value={dataEmpresa.missao}
                                onChange={e => setDataEmpresa({...dataEmpresa, missao: e.target.value})}
                            >  
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="visao" className="form-label label_form">Visão</label>
                            <textarea 
                                className="form-control input_name" 
                                id="visao" 
                                rows="3"
                                value={dataEmpresa.visao}
                                onChange={e => setDataEmpresa({...dataEmpresa, visao: e.target.value})}
                            >  
                            </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valores" className="form-label label_form">Valores</label>
                            <textarea 
                                className="form-control input_name" 
                                id="valores" 
                                rows="3"
                                value={dataEmpresa.valores}
                                onChange={e => setDataEmpresa({...dataEmpresa, valores: e.target.value})}
                            >  
                            </textarea>
                        </div>

                        <div class="mb-3">
                            <label htmlFor="sobre" class="form-label label_form">Sobre</label>
                            <textarea 
                                class="form-control input_name" 
                                id="sobre" 
                                rows="3"
                                value={dataEmpresa.sobre}
                                onChange={e => setDataEmpresa({...dataEmpresa, sobre: e.target.value})}
                            >  
                            </textarea>
                        </div>

                        <input type="submit" value="Atualizar Dados" className="btn btn-success" />
                    </form>

                </article>
            </section>
        </>
    )
}

export default Empresa