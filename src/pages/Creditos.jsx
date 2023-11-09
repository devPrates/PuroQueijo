import { useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import CardCreditos from "../components/CardCreditos/CardCreditos"

function Creditos() {
    const navigate = useNavigate()
    const voltar = () => {
        return navigate("/")
    }
    return (
        <>
            <Header />
            <section className="container d-flex flex-column gap-4">
                <article>
                    <h1 className="text-center mt-5 mb-4">Instituto Federal de Mato Grosso do Sul</h1>
                    <div className="d-flex justify-content-center gap-5 w-75 mx-auto flex-wrap">
                        <CardCreditos
                            faculdade="IFMS - Naviraí"
                            nome="Daniel Gabriel Alves"
                            curso="Análise e Desenvolvimento de Sistemas"
                            linkedin="https://www.linkedin.com/in/daniel-alves-560063252"
                            email="daniel.alves@estudante.ifms.edu.br"

                        />
                        <CardCreditos
                            faculdade="IFMS - Naviraí"
                            nome="Gabriel Prates Bitencourt"
                            curso="Análise e Desenvolvimento de Sistemas"
                            linkedin="https://www.linkedin.com/in/devPrates"
                            email="gabriel.bitencourt@estudante.ifms.edu.br"
                        />
                        <CardCreditos
                            faculdade="IFMS - Naviraí"
                            nome="Manuele Silva"
                            curso="Análise e Desenvolvimento de Sistemas"
                            linkedin="https://www.linkedin.com/in/manuele-silva-362a5a242/"
                            email="manuele.silva2@estudante.ifms.edu.br"
                        />

                        <CardCreditos
                            faculdade="IFMS - Naviraí"
                            nome="Ruth Ester Espinoza Martins"
                            curso="Análise e Desenvolvimento de Sistemas"
                            linkedin="https://www.linkedin.com/in/ruth-ester-7015a120b/"
                            email=""
                        />
                    </div>
                </article>

                <article>
                    <h1 className="text-center mt-5 mb-4">Universidade Federal de Mato Grosso do Sul</h1>
                    <div className="d-flex justify-content-center gap-5 flex-wrap w-75 mx-auto">
                        <CardCreditos
                            faculdade="UFMS - Naviraí"
                            nome="Ana Clara Batista de Oliveira"
                            curso="Administração"
                            linkedin="https://www.linkedin.com/in/ana-carla-batista-de-oliveira-2613351a0"
                            email="Adm.anacarlaoliveira@gmail.com"

                        />
                        <CardCreditos
                            faculdade="UFMS - Naviraí"
                            nome="Dayane de Matos Pereira"
                            curso="Administração"
                            linkedin="https://www.linkedin.com/in/dayane-matos-pereira-6ba4bb245"
                            email="Dayanedematospereira@gmail.com"
                        />
                        <CardCreditos
                            faculdade="UFMS - Naviraí"
                            nome="Márcio Nascimento Bonfim"
                            curso="Administração"
                            linkedin="https://www.linkedin.com/in/marcio-bonfim-7a564ba3"
                            email="marcionbonfim@gmail.com"
                        />
                        <CardCreditos
                            faculdade="UFMS - Naviraí"
                            nome="Thaís Maria Luiz Lima"
                            curso="Administração"
                            linkedin="https://www.linkedin.com/in/tha%C3%ADs-maria-315ba613b"
                            email="thaislima278@gmail.com"
                        />
                        <CardCreditos
                            faculdade="UFMS - Naviraí"
                            nome="Wesley Pereira dos Santos"
                            curso="Administração"
                            linkedin="https://www.linkedin.com/in/wesley-pereira-42385b22b"
                            email="wesley_why@hotmail.com"
                        />
                    </div>
                </article>

                <button className="btn btn_creditos mb-5" onClick={voltar}>Voltar</button>
            </section>
            <Footer />
        </>
    )
}

export default Creditos