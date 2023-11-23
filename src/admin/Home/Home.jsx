import "./home.css"
import back from "../../assets/fundo-logo-home.png"

function Home() {
    return (
        <>
            <section className="container-fluid home_admin d-flex justify-content-center">
                <img src={back} alt="" className="img_home" />
            </section>
        </>
    )
}

export default Home