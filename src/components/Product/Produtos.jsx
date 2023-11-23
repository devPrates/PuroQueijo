import CardProduto from "./CardProduto"
import './product.css'
import axios from "axios"
import { useState, useEffect } from "react"

function Produtos() {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3333/produtos")
            .then((res) => {
                setProductList(res.data)
            })
            .catch((err) => console.error(err))
    }, [])
    const [activeTab, setActiveTab] = useState(1);
    const changeTab = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (

        <>
            <section className="container produto_container" id="Produto">
                <div className="mt-5">
                    <h1 className="titulo text-center mb-5"><span className="titulo__color"> Nossos </span> Produtos</h1>
                </div>
                <div className="tab-container d-flex gap-5">
                    <div className='tab_container d-flex flex-column gap-3 pt-4'>
                        <span className="tab_titulo">Produtos</span>
                        <article className="tabs_item d-flex flex-column gap-3">
                            <div className={`tab ${activeTab === 1 ? 'ativo' : ''}`} onClick={() => changeTab(1)}>Pão de Queijo</div>
                            <div className={`tab ${activeTab === 2 ? 'ativo' : ''}`} onClick={() => changeTab(2)}>Chipa</div>
                            <div className={`tab ${activeTab === 3 ? 'ativo' : ''}`} onClick={() => changeTab(3)}>Churros</div>
                        </article>
                    </div>
                    <div className='w-75 prod_section'>
                        <div id="content1" className={`tab-content ${activeTab === 1 ? 'activo' : ''}`}>
                            <h4 className="text-center">Conheça nosso Pão de Queijo</h4>
                            <div className="product_itens d-flex flex-wrap gap-3 mt-4">
                                {
                                    productList.map(produto => {
                                        if (produto.nome === 'Pão de Queijo') {
                                            return <CardProduto titulo={produto.nome} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div id="content2" className={`tab-content ${activeTab === 2 ? 'activo' : ''}`}>
                            <h4 className="text-center">Conheça nossa Chipa</h4>
                            <div className="product_itens d-flex flex-wrap gap-3 mt-4">
                                {
                                    productList.map(produto => {
                                        if (produto.nome === 'Chipa') {
                                            return <CardProduto titulo={produto.nome} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div id="content3" className={`tab-content ${activeTab === 3 ? 'activo' : ''}`}>
                            <h4 className="text-center">Conheça nosso Churros</h4>
                            <div className="product_itens d-flex gap-3 mt-4">
                                {
                                    productList.map(produto => {
                                        if (produto.nome === 'Churros') {
                                            return <CardProduto titulo={produto.nome} sabor={produto.sabor} descricao={produto.descricao} key={produto.id} />
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Produtos