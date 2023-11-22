import './hero.css'
import banner from '../../assets/GridImagens.png'

function Hero() {
    return (
        <>
            <section className='hero'>
                <section className='container'>
                    <article className='row hero_content d-flex align-items-center'>
                        <div className='col-6 hero_conteudo'>
                            <h1 className='hero_titulo'>A hora mais saborosa do dia</h1>
                            <p className='hero_sub'>Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection youve been waiting for.</p>
                            <div className='d-flex gap-4 hero_buttons ms-3'>
                                <a className='btn hero_btn_produto' href="#Produto">Ver Produtos</a>
                                <a className='btn hero_btn_empresa' href="#Sobre">Sobre a Empresa</a>
                            </div>
                        </div>
                        <div className='col-6 hero_imagem'>
                            <img src={banner} alt="" />
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}

export default Hero


/*
            <section className=' container hero_section d-flex justify-content-between gap-5 h-10' 0id='Home'>
                <div className='hero_texto mt-5 d-flex flex-column justify-content-center gap-3 w-50'>
                    
                </div>
                <div className='hero_imagem d-flex flex-column justify-content-center w-50'>
                    <img src={banner} alt="" />
                </div>
            </section> 
*/