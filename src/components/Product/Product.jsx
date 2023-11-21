import CardProduto from "./CardProduto"
import "./product.css"
import axios from "axios"
import { useState, useEffect } from "react"



function Produtos() {
    const [productList, setProductList] = useState([])

    useEffect(() =>{
        axios.get("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/produto")
    .then((res) => {
        setProductList(res.data)
    })
    .catch((err) =>console.error(err))
    }, [])
    
    return (
        <>
            <section className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="Produto">
                <h1 className="titulo text-center mb-5"><span className="titulo__color"> Nossos </span> Produtos</h1>

                <section className="acordion_product w-100 mb-5">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Pão de Queijo
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-around gap-3 flex-wrap">
                                    {
                                        productList.map(produto => {
                                            if (produto.nomeProduto === 'Pão de Queijo') {
                                                return <CardProduto titulo={produto.nomeProduto} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Chipa
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex gap-3 justify-content-around  flex-wrap">
                                    {
                                         productList.map(produto => {
                                            if (produto.nomeProduto === 'Chipa') {
                                                return <CardProduto titulo={produto.nomeProduto} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Churros
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex gap-3 justify-content-around flex-wrap">
                                    {
                                         productList.map(produto => {
                                            if (produto.nomeProduto === 'Churros') {
                                                return <CardProduto titulo={produto.nomeProduto} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Produtos