
function CardContato (props){
    return (
        <>
            <section className="card__contato d-flex align-items-center justify-content-start gap-2">
                    <i className={props.icon}></i>
                    <div className="d-flex flex-column align-items-start">
                    <span className="card__titulo">{props.titulo}</span>
                    <span className="card__sub">{props.info}</span>
                    </div>
            </section>
        </>
    )
}

export default CardContato