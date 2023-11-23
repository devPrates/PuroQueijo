import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


function CadastroProduto() {
    {/*https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/produto*/}
    const navigate = useNavigate()
    const [nomeProduto, setNomeProduto] = useState()
    const [descricao, setDescricao] = useState()
    const [sabor, setSabor] = useState()
    const [url, setUrl] = useState()

    const criarproduto =  (e) => {
        e.preventDefault();
        console.log(nomeProduto, descricao, sabor, url)

        fetch('https://x8ki-letl-twmt.n7.xano.io/api:qttFphyQ/produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeProduto,
                descricao,
                sabor,
                url,
            }),
        })
        .then((response) => {
            console.log('Status da resposta:', response.status);

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            return response.json();
        })
        .then((responseData) => {
            console.log('Resposta do servidor:', responseData);
            // Adicione aqui a lógica que deseja executar após o sucesso da requisição
            navigate('/caminho-da-pagina-de-sucesso');
        })
        .catch((error) => {
            console.error('Erro ao enviar a requisição:', error.message);
            // Adicione aqui a lógica para tratar o erro, se necessário
        });

    }

    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Cadastrar Produto</h1>
                <article className="cadastro-container">
                    <form onSubmit={(e) => criarproduto(e)} className="w-100 form-dados">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label label_form">Nome Produto</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nopme do produto"
                                className="form-control input_name"
                                onChange={(e) => setNomeProduto(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label label_form">Descrição</label>
                            <textarea
                                className="form-control input_name"
                                id="descricao"
                                placeholder="Descrição do Produto"
                                onChange={(e) => setDescricao(e.target.value)}
                                rows="3">
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sabor" className="form-label label_form">Sabor Produto</label>
                            <input
                                type="text"
                                id="sabor"
                                placeholder="Sabor do produto"
                                className="form-control input_name"
                                onChange={(e) => setSabor(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="url" className="form-label label_form">Url da Imagem do Produto</label>
                            <input
                                type="text"
                                id="url"
                                placeholder="Url da Imagem do Produto"
                                className="form-control input_name"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Criar Post" className="btn btn-success" />
                    </form>
                </article>
            </section>
        </>
    )
}

export default CadastroProduto