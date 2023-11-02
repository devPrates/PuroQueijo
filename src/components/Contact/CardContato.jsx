
function CardContato (props){
    return (
        <>
            <section className="card__contato d-flex flex-column align-items-center justify-content-center">
                    <i className={props.icon}></i>
                    <span className="card__titulo">{props.titulo}</span>
                    <span className="card__sub">{props.info}</span>
            </section>
        </>
    )
}

export default CardContato