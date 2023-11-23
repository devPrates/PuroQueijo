import place from "../../assets/teste3.png"

function CardProduto(props) {
    return (
        <>
            <div className="card card_produto mb-3">
                <div className="row g-0">
                    <div className="col-md-5 my-auto">
                        <img src={place} className="img-fluid " alt="..."></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body d-flex flex-column justify-content-between  h-100">
                            <div>
                                <h5 className="card-title title_card">{props.titulo}</h5>
                                <h6 className="sub_card">{props.sabor}</h6>
                            </div>
                            <p className="card-text">{props.descricao}</p>
                            <button className="mt-3 btn btn_card">
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