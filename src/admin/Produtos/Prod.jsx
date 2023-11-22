import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"


function Prod() {
    const [dado, setDado] = useState([])
    useEffect(() => {
        axios.get("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/produto")
            .then((res) => {
                setDado(res.data)
            })
            .catch((err) => console.error(err))
    }, [])


    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between w-100">
                    <h1 className="">Produtos</h1>
                    <Link className="btn btn-info d-flex align-items-center" to="/admin/cadastrar-Produto">+ Cadastrar Produto</Link>
                </div>
                <article className="d-flex justify-content-between gap-5 mt-2">
                    <table className="table ">
                        <thead>
                            <tr className="table-active">
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Sabor</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        {
                            dado.map(item =>{
                                return <tbody className="table-hover" key={item.id}>
                                            <tr>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.nomeProduto}</td>
                                                <td>{item.sabor}</td>
                                                <td>{item.descricao}</td>
                                                <td><i className='bx bxs-edit ps-3 text-success'></i></td>
                                                <td><i className='bx bxs-trash ps-3 text-danger'></i></td>
                                            </tr>
                                        </tbody>
                            })
                        }
                    </table>
                </article>

            </section>
        </>
    )
}

export default Prod