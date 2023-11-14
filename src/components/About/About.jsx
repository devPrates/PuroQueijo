import "./about.css"
import missao from "../../assets/missao.png"
import visao from "../../assets/visao.png"
import valores from "../../assets/valores.png"
import CardAbout from "./CardAbout"
import sobreImage from "../../assets/sobreImage.jpg"


function Sobre() {
    return (
        <>
            <section className="about" id="Sobre">
                <section className="container d-flex gap-5 h-100">
                    <div className="w-50 d-flex justify-content-center align-items-center">
                        <img src={sobreImage} className="about_image" alt="" />
                    </div>
                    <article className="d-flex flex-column gap-3 justify-content-center sobre__texto w-50">
                        <div className="about_content">
                            <h1 className="mt-4 titulo titulo-sobre"><span className="titulo__color "> Sobre </span> Nós</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore tempora, pariatur expedita quidem voluptatem laborum. Voluptates sapiente id ab necessitatibus atque eligendi sint, aut dignissimos ipsum repudiandae nulla nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at labore quam ipsum fugit reprehenderit quaerat reiciendis quod vitae unde quidem perspiciatis nostrum, quibusdam itaque placeat aliquam dicta ex odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore tempora, pariatur expedita quidem voluptatem laborum. Voluptates sapiente id ab necessitatibus atque eligendi sint, aut dignissimos ipsum repudiandae nulla nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus rem reiciendis temporibus dolorum accusantium! Quis cum nulla tenetur consequuntur quod veritatis sed dolorem reiciendis sunt omnis nihil, dolor accusantium!
                            </p>
                        </div>
                        <div className="d-flex gap-2">
                            <CardAbout titulo="MISSÃO"/>
                            <CardAbout titulo="MISSÃO"/>
                            <CardAbout titulo="MISSÃO"/>
                        </div>
                    </article>


                </section>
            </section>
        </>
    )
}

export default Sobre