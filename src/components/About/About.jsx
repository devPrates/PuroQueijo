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
        axios.get("https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/empresa/1")
            .then((res) => {
                setDadoSobre(res.data)
            })
            .catch((err) => console.error(err))
    }, [])
    return (
        <>
            <section className="about mb-5" id="Sobre">
                <section className="container about_container d-flex gap-5 h-100 ">
                    <div className="w-50 d-flex justify-content-center align-items-center">
                        <img src={sobreImage} className="about_image" alt="" />
                    </div>
                    <article className="d-flex flex-column align-items-center justify-content-center sobre__texto">
                        <h1 className="mt-4 titulo titulo-sobre text-center"><span className="titulo__color "> Nossa </span> História</h1>
                        <div className="about_content">
                            <p className="mx-auto">
                                {dadoSobre.sobre}
                            </p>
                        </div>
                        <div className="cards__sobre d-flex justify-content-center gap-5">
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