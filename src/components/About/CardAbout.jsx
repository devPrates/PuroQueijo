import "./about.css"

function CardAbout(props){
    return (
        <>
            <div className="cardMVV d-flex gap-3 flex-column align-items-center justify-content-center text-center">
               <div className="sobre__card-svg">
                  <img src={props.imagem} alt={props.alt} />
               </div>
               <h3 className="sobre__card-titulo">{props.titulo}</h3>
               <p className="sobre__card-sub">{props.texto}</p>
            </div>
        </>
    )
}

export default CardAbout