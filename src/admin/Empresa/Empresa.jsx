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

    useEffect(() => {
        axios.get("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/empresa/1")
            .then((res) => {
                setDadoSobre(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    const salvarDados = (e) => {
        e.preventDefault();

        console.log(nome, celular);
    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Dados da Empresa</h1>
                <article className="d-flex justify-content-between gap-5">

                    <form onSubmit={(e) => salvarDados(e)}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome Fantasia</label>
                            <input 
                                type="text" 
                                id="nome" 
                                placeholder={dadoSobre.nomeFantasia}
                                className="form-control" 
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Celular</label>
                            <input 
                                type="text" 
                                id="celular"
                                className="form-control"
                                placeholder={dadoSobre.celular}
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                className="form-control"
                                placeholder={dadoSobre.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">Numero de Telefone</label>
                            <input 
                                type="text" 
                                id="telefone"
                                className="form-control"
                                placeholder={dadoSobre.telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnpj" className="form-label">CNPJ</label>
                            <input 
                                type="text" 
                                id="cnpj"
                                className="form-control"
                                placeholder={dadoSobre.cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                            />
                        </div>
                        

                        <input type="submit" value="Criar Post" className="btn btn-success"/>
                    </form>



                </article>
            </section>
        </>
    )
}

export default Empresa