import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"


function User() {
    const navigate = useNavigate();
    const [dado, setDado] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3333/users")
            .then((res) => {
                setDado(res.data)
            })
            .catch((err) => console.error(err))
    }, [])


    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between w-100">
                    <h1 className="">Usuarios do Sistema</h1>
                    <Link className="btn btn-info d-flex align-items-center" to="/admin/cadastrar-usuario">+ Cadastrar Usuario</Link>
                </div>
                <article className="d-flex justify-content-between gap-5 mt-2">
                    <table className="table ">
                        <thead>
                            <tr className="table-active">
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        {
                            dado.map(item =>{
                                return <tbody className="table-hover" key={item.id}>
                                            <tr>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.mail}</td>
                                                <td className="d-flex gap-1">
                                                    <Link to={`/admin/Update-usuario/${item.id}`} className="btn btn-sm btn-warning"> 
                                                        <i className='bx bxs-edit'></i>
                                                    </Link>
                                                    <button onClick={e=> deletaritem(item.id)} className="btn btn-sm btn-danger">
                                                        <i className='bx bxs-trash'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                            })
                        }
                    </table>
                </article>

            </section>
        </>
    )


    function deletaritem(id){
        const conf = window.confirm("Tem certeza que deseja deletar este usuario? ")

        if(conf) {
            axios.delete('http://localhost:3333/users/' +id)
            .then(res =>{
                alert("item deletado com sucesso!")
                navigate('/admin/Home')
            }).catch(err => console.log(err))
        }
    }
}

export default User