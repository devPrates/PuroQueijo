
function Publicacoes() {
    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Publicações</h1>
                <article className="d-flex justify-content-between gap-5">
                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="titulo" className="form-label">Titulo</label>
                            <input type="email" className="form-control" id="titulo" placeholder="Titulo"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="resumo" className="form-label">Resumo</label>
                            <input type="email" className="form-control" id="resumo" placeholder="Resumo"></input>
                        </div>


                        <div className="input__dados mb-3">
                            <label for="descricao" className="form-label">Descrição</label>
                            <textarea class="form-control" placeholder="Descrição"></textarea>
                        </div>


                    </section>

                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="urlFoto" className="form-label">Url da Foto</label>
                            <input type="email" className="form-control" id="urlFoto" placeholder="Url da Foto"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="emissao" className="form-label">Emissao</label>
                            <input type="email" className="form-control" id="emissao" placeholder="Emissao"></input>
                        </div>
                    </section>
                </article>
                <button className="btn btn-info w-25 mx-auto">Enviar</button>
            </section>
        </>
    )
}

export default Publicacoes