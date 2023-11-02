import CardContato from './CardContato'
import './contact.css'


function Contato() {
    return (
        <>
            <section className='container mt-5'>
                <h1 className='titulo text-center mt-5'><span className='titulo__color'>Entrar em</span> Contato</h1>
                <article className='d-flex justify-content-center gap-3 mt-5'>
                    <div className=''>
                        <iframe
                            className='contato__mapa'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.7781119454129!2d-54.22519433051624!3d-23.05633869869687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8e51ba11d40d%3A0xece69665c0a9a144!2sAv.%20Amamba%C3%AD%2C%201903%20-%20Jardim%20Paraiso%2C%20Navira%C3%AD%20-%20MS%2C%2079950-000!5e0!3m2!1spt-BR!2sbr!4v1686869139450!5m2!1spt-BR!2sbr"
                            frameborder="0">
                        </iframe>
                    </div>
                    <div className='d-flex flex-wrap gap-3'>
                        <CardContato icon='bx bxs-phone-call' titulo="Telefone" info="(67) 99144-4444" />
                        <CardContato icon='bx bxs-envelope' titulo="Email" info="exemplo@gmail.com" />
                        <CardContato icon='bx bxs-phone-call' titulo="Telefone" info="(67) 99144-4444" />
                        
                    </div>
                </article>

            </section>
        </>
    )
}

export default Contato