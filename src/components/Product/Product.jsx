import "./product.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import place from "../../assets/place.jpg"

function Produtos() {
    return (
        <>
            <section className="container mt-5 d-flex flex-column align-items-center">
                <h1 className="titulo"><span className="titulo__color"> Nossos </span> Produtos</h1>
                <p className="subtitulo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim adipisci molestiae ex nobis consectetur odio error fugit</p>

                <div className="produto_tab mt-5 d-flex flex-column align-items-center ">
                    <ul className="nav nav-pills mb-3 d-flex gap-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pão de Queijo</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Chipa</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Churros</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <div className="d-flex gap-5 flex-wrap mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={place} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={place} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <div className="d-flex gap-5 flex-wrap mt-4">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={place} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">...</div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Produtos