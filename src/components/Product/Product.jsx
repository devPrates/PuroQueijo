import CardProduto from "./CardProduto"
import "./product.css"
import produtos from "../../json/produtos.json"



function Produtos() {

    return (
        <>
            <section className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="Produto">
                <h1 className="titulo"><span className="titulo__color"> Nossos </span> Produtos</h1>
                <p className="subtitulo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim adipisci molestiae ex nobis consectetur odio error fugit</p>

                <section className="w-75">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Pão de Queijo
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex gap-3 flex-wrap">
                                    {
                                        produtos.map(produto => {
                                            if (produto.Categoria === 'Pão de Queijo') {
                                                return <CardProduto urlImagem={produto.UrlImagem} titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
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
                                <div className="accordion-body d-flex gap-3 flex-wrap">
                                {
                                        produtos.map(produto => {
                                            if (produto.Categoria === 'Chipa') {
                                                return <CardProduto titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
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
                                <div className="accordion-body d-flex gap-3 flex-wrap">
                                {
                                        produtos.map(produto => {
                                            if (produto.Categoria === 'Churros') {
                                                return <CardProduto titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
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