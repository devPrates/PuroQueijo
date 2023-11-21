import place from "../../assets/teste3.png"

function CardProduto(props) {
    return (
        <>
            <div className="card card_produto mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={place} className="img-fluid " alt="..."></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo}</h5>
                            <h6>{props.sabor}</h6>
                            <p className="card-text">{props.descricao}</p>
                            <div className="d-flex w-100 gap-1">
                                <button className="btn btn-info btn-sm disabled">400 G</button>
                                <button className="btn btn-info btn-sm">900 G</button>
                                <button className="btn btn-info btn-sm">1 KG</button>
                            </div>
                            <button className="mt-3 btn btn-warning">
                                +  informações
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduto