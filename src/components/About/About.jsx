import "./about.css"
import missao from "../../assets/missao.png"
import visao from "../../assets/visao.png"
import valores from "../../assets/valores.png"
import CardAbout from "./CardAbout"


function Sobre(){
    return(
        <>
                <section className="about mt-5" id="Sobre">
                    <section className="container d-flex gap-5 ">   
                        <article className="d-flex flex-column gap-3 justify-content-center sobre__texto w-50">
                        <h1 className="mt-4 titulo titulo-sobre text-center"><span className="titulo__color "> Sobre </span> Nós</h1>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore tempora, pariatur expedita quidem voluptatem laborum. Voluptates sapiente id ab necessitatibus atque eligendi sint, aut dignissimos ipsum repudiandae nulla nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at labore quam ipsum fugit reprehenderit quaerat reiciendis quod vitae unde quidem perspiciatis nostrum, quibusdam itaque placeat aliquam dicta ex odio.
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore tempora, pariatur expedita quidem voluptatem laborum. Voluptates sapiente id ab necessitatibus atque eligendi sint, aut dignissimos ipsum repudiandae nulla nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus rem reiciendis temporibus dolorum accusantium! Quis cum nulla tenetur consequuntur quod veritatis sed dolorem reiciendis sunt omnis nihil, dolor accusantium!
                        </p>
                        </article>

                        <article className="d-flex flex-column w-50 align-items-center justify-content-around">
                                <CardAbout imagem={missao} titulo="MISSÃO"/>
                                <CardAbout imagem={visao} titulo="VISÃO"/>
                                <CardAbout imagem={valores} titulo="VALORES"/>
                        </article>
                    </section>
                </section>
        </>
    )
}

export default Sobre