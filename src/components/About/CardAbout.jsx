import "./about.css"

function CardAbout(props) {
    return (
        <>
            <div className="card card_about mb-3">
                <div className="card-header card_header d-flex justify-content-center gap-2">
                    <img src={props.imagem} alt="" />
                    <span>{props.titulo}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Secondary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default CardAbout