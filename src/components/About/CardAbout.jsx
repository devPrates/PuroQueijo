import "./about.css"

function CardAbout(props) {
    return (
        <>
            <div class="card card_about">
                <div class="card-header card_header d-flex align-items-center justify-content-center gap-2">
                    <img src={props.imagem} alt="" />
                    <span> {props.titulo}</span>
                </div>
                <div class="card-body card_body">
                    <p class="card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default CardAbout