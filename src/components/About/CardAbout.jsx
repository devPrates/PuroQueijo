import "./about.css"

function CardAbout(props) {
    return (
        <>
            <div class="card card_about">
                <div class="card-header card_header"><span> {props.titulo}</span></div>
                <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default CardAbout