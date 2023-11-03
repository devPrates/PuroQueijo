
function Prod() {
    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Produtos</h1>
                <article className="d-flex justify-content-between gap-5">
                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="nomeDoProduto" className="form-label">Nome do Produto</label>
                            <input type="email" className="form-control" id="nomeDoProduto" placeholder="Nome do Produto"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="descricao" className="form-label">Descrição</label>
                            <textarea class="form-control" placeholder="Descrição"></textarea>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="urlImagem" className="form-label">Url da Imagem</label>
                            <input type="email" className="form-control" id="urlImagem" placeholder="Url da Imagem"></input>
                        </div>
                    </section>

                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="complemento" className="form-label">Complemento</label>
                            <input type="email" className="form-control" id="complemento" placeholder="Complemento"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="complemento" className="form-label">Disponibilidade</label>
                            <select class="form-select">
                                <option value="1">Disponível</option>
                                <option value="2">Indisponível</option>
                            </select>
                        </div>
                    </section>
                </article>
                <button className="btn btn-info w-25 mx-auto">Enviar</button>
            </section>
        </>
    )
}

export default Prod