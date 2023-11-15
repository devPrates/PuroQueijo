import produtos from "../../json/produtos.json"
import './produto.css'
import CardProduto from "./CardProduto"

function ProdutoTeste() {
    return (
        <>
            <section className="container mt-5 mb-5">
                <nav id="navbar-example2" className="navbar produtos_container px-3 mb-3">
                    <a className="navbar-brand" href="#">Conheça nossos Produtos</a>
                    <ul className="nav nav-pills d-flex gap-3">
                        <li className="nav-item">
                            <a className="nav-link produto_menu-item" href="#PaodeQueijo">Pão de Queijo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link produto_menu-item" href="#Chipa">Chipa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link produto_menu-item" href="#Churros">Churros</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2 product_content" tabIndex="0">
                    <div id="PaodeQueijo">
                        <h3>Pão de Queijo</h3>
                        <article className='ps-5 d-flex gap-3 flex-wrap'>
                            {
                                produtos.map(produto => {
                                    if (produto.Categoria === 'Pão de Queijo') {
                                        return <CardProduto urlImagem={produto.UrlImagem} titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
                                    }
                                })
                            }
                        </article>
                    </div>
                    <div id="Chipa">
                        <h3>Chipa</h3>
                        <article className='ps-5 d-flex gap-3 flex-wrap'>
                            {
                                produtos.map(produto => {
                                    if (produto.Categoria === 'Chipa') {
                                        return <CardProduto titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
                                    }
                                })
                            }
                        </article>
                    </div>
                    <div id="Churros">
                        <h3>Churros</h3>
                        <article className='ps-5 d-flex gap-3 flex-wrap'>
                            {
                                produtos.map(produto => {
                                    if (produto.Categoria === 'Churros') {
                                        return <CardProduto titulo={produto.Categoria} descricao={produto.Descricao} key={produto.kay} />
                                    }
                                })
                            }
                        </article>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProdutoTeste