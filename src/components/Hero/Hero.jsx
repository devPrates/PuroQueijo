import './hero.css'
import banner from '../../assets/banner.png'

function Hero(){
    return (
        <>
        <section className='hero'>
            <section className=' container d-flex justify-content-between gap-5' id='Home'>
                <div className='hero_texto mt-5 d-flex flex-column justify-content-center gap-3'>
                    <h1 className='hero_titulo'>A hora mais saborosa do dia</h1>
                    <p className='hero_sub'>Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection youve been waiting for.</p>
                    <div className='d-flex gap-4 hero_buttons'>
                        <a className='btn hero_btn_produto' href="">Ver Produtos</a>
                        <a className='btn hero_btn_empresa' href="">Sobre a Empresa</a>
                    </div>
                </div>
                <div className='hero_imagem mt-5'>
                    <img src={banner} alt="" />
                </div>
            </section>
        </section>
        </>
    )
}

export default Hero