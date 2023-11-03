import "./empresa.css"

function Empresa() {
    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Dados da Empresa</h1>
                <article className="d-flex justify-content-between gap-5">
                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="nomeFantasia" className="form-label">Nome Fantasia</label>
                            <input type="email" className="form-control" id="nomeFantasia" placeholder="Nome Fantasia"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="celular" className="form-label">Celular</label>
                            <input type="email" className="form-control" id="celular" placeholder="Celular"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="E-mail" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="E-mail" placeholder="E-mail"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="Telefone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="Telefone" placeholder="Telefone"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="CNPJ" className="form-label">CNPJ</label>
                            <input type="text" className="form-control" id="CNPJ" placeholder="CNPJ"></input>
                        </div>
                    </section>

                    <section className="w-50">
                        <div className="input__dados mb-3">
                            <label for="missao" className="form-label">Missão</label>
                            <textarea class="form-control" placeholder="Missão"></textarea>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="visao" className="form-label">Visão</label>
                            <textarea class="form-control" placeholder="Visão"></textarea>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="valores" className="form-label">Valores</label>
                            <textarea class="form-control" placeholder="Valores"></textarea>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="sobre" className="form-label">Sobre</label>
                            <textarea class="form-control" placeholder="Sobre"></textarea>
                        </div>
                    </section>
                </article>
                <button className="btn btn-info w-25 mx-auto">Enviar</button>
            </section>
        </>
    )
}

export default Empresa