import './cardcreditos.css'
function CardCreditos(props) {
    return (
        <>
            <div className="card card__credtios mb-3" >
                <div className="card-header">{props.faculdade}</div>
                <div className="card-body text-center">
                        <i className='bx bxs-user-circle'></i>
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.curso}</p>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <a href={props.linkedin} target='_blanck' className='text-dark'><i className='bx bxl-linkedin-square fs-2 w-50' ></i></a>
                    <a href={`mailto:${props.email}`} className='text-dark'><i className='bx bxl-gmail fs-2 w-50' ></i></a>
                </div>
            </div>
        </>
    )
}

export default CardCreditos