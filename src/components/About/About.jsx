import "./about.css"
import missao from "../../assets/missao.png"
import visao from "../../assets/visao.png"
import CardAbout from "./CardAbout"

function Sobre(){
    return(
        <>
                <section className="about mt-5" id="Sobre">
                    <section className="container d-flex flex-column align-items-center gap-3 w-50">   
                        <h1 className="mt-4 titulo titulo-sobre"><span className="titulo__color "> Sobre </span> Nós</h1>
                        <article className="d-flex gap-3 justify-content-center sobre__texto">
                            <p className=""> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore tempora, pariatur expedita quidem voluptatem laborum. Voluptates sapiente id ab necessitatibus atque eligendi sint, aut dignissimos ipsum repudiandae nulla nemo.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit voluptates laborum beatae dolorem repellendus animi, modi minus, dignissimos laboriosam, a consequuntur ullam vero error blanditiis veritatis cumque sint veniam!</p>
                        </article>

                        <div className="about__cards d-flex gap-5 mt-5">
                            <CardAbout imagem={missao} titulo="Missão" texto="Fornecer produtos para alimentação com qualidade e sabor único."/>
                            <div className="card__about"><CardAbout imagem={visao} titulo="Visão" texto="Fornecer produtos para alimentação com qualidade e sabor único."/></div>
                            <CardAbout imagem={missao} titulo="Missão" texto="Fornecer produtos para alimentação com qualidade e sabor único."/>
                        </div>  
                    </section>
                </section>
        </>
    )
}

export default Sobre