import Socials from '../Socials/Socials'
import './footer.css'
import logo from "/Logo.png"
import ifms from "../../assets/ifms.png"
import ufms from "../../assets/ufms.png"
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <section className='footer'>
                <article className='footer__content container d-flex justify-content-between pt-4 mb-4'>
                    <div className='footer__content-1 d-flex justify-content-around w-50'>
                        <div className=' d-flex flex-column align-items-center gap-1'>
                            <img src={logo} alt="" className='footer__logo' />
                            <span className='footer__logo-name'>Puro Queijo</span>
                        </div>
                        <div>
                            <span className='footer__titulo'>Sobre</span>
                            
                                <div className='d-flex flex-column mt-1 gap-1'>
                                    <a href='#Home' className='footer__item-nav'>Home</a>
                                    <a href='#Produtos' className='footer__item-nav'>Produtos</a>
                                    <a href='#Sobre' className='footer__item-nav'>Sobre</a>
                                    <a href='#Contato' className='footer__item-nav'>Contato</a>
                                </div>
                        </div>
                    </div>
                    <div className='footer__content-2 d-flex justify-content-around w-50'>
                        <div className='parceiros d-flex flex-column gap-1'>
                            <span className='footer__titulo'>Parceiros</span>
                            <div className='d-flex gap-1'>
                                <img src={ifms} alt="" className='footer__parceiros-img' />
                                <img src={ufms} alt="" className='footer__parceiros-img' />
                            </div>
                        </div>
                        <div className='contato'>
                            <span className='footer__titulo'>Contato</span>
                            <div className='d-flex flex-column gap-2 mt-1'>
                                <div className='d-flex gap-2 align-items-center footer__contato'>
                                    <i className='bx bxs-phone-call'></i>
                                    <span>(67) 99999-9999</span>
                                </div>
                                <div className='d-flex gap-2 align-items-center footer__contato'>
                                    <i className='bx bxl-gmail'></i>
                                    <span>Exemplo@gmail.com</span>
                                </div>
                                <Socials />
                            </div>
                        </div>
                    </div>
                </article>
                <article className='container footer__creditos d-flex justify-content-between'>
                    <div className='footer__copy mt-1 mb-1'>
                        <span>&copy; Copyright 2023 <strong>IFMS & UFMS - Campus Naviraí</strong> Todos os direitos reservados.</span>
                    </div>
                    <div className='footer__links d-flex gap-2 mt-1 mb-1'>
                        <a href="#">Contatos</a>
                        <Link to="/Creditos">Creditos</Link>
                    </div>

                </article>
            </section>
        </>
    )

}
export default Footer