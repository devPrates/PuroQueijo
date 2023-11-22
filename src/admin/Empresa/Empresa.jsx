import "./empresa.css"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

function Empresa() {
    const navigate = useNavigate()
    const [dadoSobre, setDadoSobre] = useState([])
    const [nome, setNome] = useState()
    const [celular, setCelular] = useState()
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState()
    const [cnpj, setCnpj] = useState()
    const [missao, setMissao] = useState()
    const [visao, setVisao] = useState()
    const [valores, setValores] = useState()
    const [sobre, setSobre] = useState()

    useEffect(() => {
        axios.get("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/empresa/1")
            .then((res) => {
                setDadoSobre(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    const salvarDados = async (e) => {
        e.preventDefault();

        let id = 1
        const data = {id, nome, celular, email, telefone, cnpj, missao, visao, valores, sobre}
        await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/empresa/1", data)
        navigate("/admin/Home")
    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Dados da Empresa</h1>
                <article className="d-flex gap-5 empresa_container">

                    <form onSubmit={(e) => salvarDados(e)} className="w-100 form-dados ">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome Fantasia</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder={dadoSobre.nomeFantasia}
                                className="form-control input_name"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label label_form">Celular</label>
                            <input
                                type="text"
                                id="celular"
                                className="form-control input_name"
                                placeholder={dadoSobre.celular}
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label label_form">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control input_name"
                                placeholder={dadoSobre.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label label_form">Numero de Telefone</label>
                            <input
                                type="text"
                                id="telefone"
                                className="form-control input_name"
                                placeholder={dadoSobre.telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnpj" className="form-label label_form">CNPJ</label>
                            <input
                                type="text"
                                id="cnpj"
                                className="form-control input_name"
                                placeholder={dadoSobre.cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="missao" className="form-label label_form">Missão</label>
                            <textarea 
                                className="form-control input_name" 
                                id="missao" 
                                placeholder={dadoSobre.missao}
                                onChange={(e) => setMissao(e.target.value)}
                                rows="3">  
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="visao" className="form-label label_form">Visão</label>
                            <textarea 
                                className="form-control input_name" 
                                id="visao" 
                                placeholder={dadoSobre.visao}
                                onChange={(e) => setVisao(e.target.value)}
                                rows="3">  
                            </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valores" className="form-label label_form">Valores</label>
                            <textarea 
                                className="form-control input_name" 
                                id="valores" 
                                placeholder={dadoSobre.valores}
                                onChange={(e) => setValores(e.target.value)}
                                rows="3">  
                            </textarea>
                        </div>

                        <div class="mb-3">
                            <label htmlFor="sobre" class="form-label label_form">Sobre</label>
                            <textarea 
                                class="form-control input_name" 
                                id="sobre" 
                                placeholder={dadoSobre.sobre}
                                onChange={(e) => setSobre(e.target.value)}
                                rows="3">  
                            </textarea>
                        </div>

                        <input type="submit" value="Criar Post" className="btn btn-success" disabled/>
                    </form>



                </article>
            </section>
        </>
    )
}

export default Empresa