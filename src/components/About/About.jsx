import "./about.css"
import missao from "../../assets/missao.png"
import visao from "../../assets/visao.png"
import valores from "../../assets/valores.png"
import CardAbout from "./CardAbout"
import sobreImage from "../../assets/sobreImage.jpg"
import axios from "axios"
import { useState, useEffect } from "react"


function Sobre() {
    const [dadoSobre, setDadoSobre] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3333/empresa")
            .then((res) => {
                console.log(res.data)
                setDadoSobre(res.data[0])
            })
            .catch((err) => console.error(err))
    }, [])
    return (
        <>
            <section className="about d-flex justify-content-center align-items-center" id="Sobre">
                <section className="container row about_container">
                    <div className="col-5 imagem_about my-auto">
                        <img src={sobreImage} className="about_image" alt="" />
                    </div>
                    <article className="col-7">
                        <h1 className="titulo titulo-sobre text-center"><span className="titulo__color "> Nossa </span> História</h1>
                        <div className="about_content">
                            <p className="mx-auto">
                                {dadoSobre.sobre}
                            </p>
                        </div>
                        <div className="cards__sobre d-flex justify-content-center gap-3  mx-auto">
                                <CardAbout imagem={missao} titulo="MISSÃO" texto={dadoSobre.missao} />
                                <CardAbout imagem={visao} titulo="VISÃO" texto={dadoSobre.visao} />
                                <CardAbout imagem={valores} titulo="VALORES" texto={dadoSobre.valores} />
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}

export default Sobre