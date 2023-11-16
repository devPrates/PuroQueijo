import CardContato from './CardContato'
import './contact.css'


function Contato() {
    return (
        <>
            <section className='container mt-5 mb-5' id='Contato'>
                <h1 className='titulo text-center mt-5'><span className='titulo__color'>Entrar em</span> Contato</h1>
                <article className='d-flex justify-content-center gap-3 mt-5 flex-wrap'>
                    <div className=''>
                        <iframe
                            className='contato__mapa'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.7781119454129!2d-54.22519433051624!3d-23.05633869869687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8e51ba11d40d%3A0xece69665c0a9a144!2sAv.%20Amamba%C3%AD%2C%201903%20-%20Jardim%20Paraiso%2C%20Navira%C3%AD%20-%20MS%2C%2079950-000!5e0!3m2!1spt-BR!2sbr!4v1686869139450!5m2!1spt-BR!2sbr"
                            frameBorder="0">
                        </iframe>
                    </div>
                    <div className='contato_contato d-flex flex-column gap-2'>
                        <div className='face'>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpuroqueijo%2F&tabs=timeline&width=340&height=80&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" className="contato__face" scrolling="no" frameBorder="0" ></iframe>
                        </div>
                        <div></div>
                        <div className='d-flex gap-2'>
                            <CardContato icon='bx bx-phone-incoming' titulo="Telefone" info="(67) 99144-4444" />
                            <CardContato icon='bx bx-envelope' titulo="Email" info="exemplo@gmail.com" />

                        </div>
                        <div className='d-flex gap-2'>
                            <div className='d-flex flex-column gap-2'>
                                <CardContato icon='bx bxl-whatsapp' titulo="Whatsapp" info="(67) 99144-4444" />
                                <CardContato icon='bx bxl-instagram' titulo="Instagram" info="@puroqueijo_paodequeijo" />
                            </div>
                            <div className='contato_vertical d-flex flex-column align-items-center justify-content-center'>
                                <i className='bx bx-time-five'></i>
                                <span className='vertical__titulo'>Atendimento</span>
                                <span><strong> Segunda a sexta</strong></span>
                                <span>Das 7h as 11h</span>
                                <span>&</span>
                                <span>Das 13h as 17h</span>
                            </div>
                        </div>

                    </div>

                </article>




            </section>
        </>
    )
}

export default Contato