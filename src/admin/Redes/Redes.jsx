
function Redes() {
    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Redes Sociais</h1>
                
                    <section className="mx-auto w-50">
                        <div className="input__dados mb-3">
                            <label for="Nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="Nome" placeholder="Nome"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="Usuario" className="form-label">Usuario</label>
                            <input type="email" className="form-control" id="Usuario" placeholder="Usuario"></input>
                        </div>

                        <div className="input__dados mb-3">
                            <label for="urlFoto" className="form-label">Url da Foto</label>
                            <input type="text" className="form-control" id="urlFoto" placeholder="Url da Foto"></input>
                        </div>

                    </section>

                
                <button className="btn btn-info w-25 mx-auto">Enviar</button>
            </section>
        </>
    )
}

export default Redes