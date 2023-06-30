import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./contacto.css";
import Footer from "../footer/footer";
import Logo from "../../logo/logo meyblaks-01.png";
import Navigation from "../navigation/navigation";
import Features from "../features/features";



function Contacto() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (

        <div>

            <Navigation />

            <header className="header-contacto">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary-contact">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Contacta con nosotros</span>
                    </h1>

                    <Link to="/" className="btn-contact">Inicio</Link>

                </div>

            </header>

            <div className='body-contact'>

                <section className="contact">

                    <div className="contact-content">
                        <h2 className="contact-h2">Contactanos</h2>
                        <p className="contact-p">
                            Esperamos hayas tenido una linda estadia en nuestro sitio web.
                            Podes ponerte en contacto con nosotros a traves de nuestras redes sociales o por el
                            formulario enviandonos un mail.
                        </p>
                    </div>

                    <div className="contact-container">

                        <div className="contact-info">

                            <div className="contact-box">
                                <div className="contact-icon"><ion-icon name="location-outline"></ion-icon></div>
                                <div className="contact-text">
                                    <h3 className="contact-h3">Direccion</h3>
                                    <p className="contact-p-2">
                                        Calle Intendente Aphalo 292 PB H - San Isidro
                                    </p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="contact-icon"><ion-icon name="call-outline"></ion-icon></div>
                                <div className="contact-text">
                                    <h3 className="contact-h3">Telefono</h3>
                                    <p className="contact-p-2">
                                        115-596-7462
                                    </p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="contact-icon"><ion-icon name="mail-outline"></ion-icon></div>
                                <div className="contact-text">
                                    <h3 className="contact-h3">Email</h3>
                                    <p className="contact-p-2">
                                        meyblaks@gmail.com
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="contact-form">

                            <form>
                                <h2 className="contact-form-h2">Enviar Mensaje</h2>
                            </form>

                            <div className="contact-input-box">
                                <input type="text" name="" required="required" placeholder=' ' />
                                <span>Nombre</span>
                            </div>

                            <div className="contact-input-box">
                                <input type="text" name="" required="required" placeholder=' ' />
                                <span>Email</span>
                            </div>

                            <div className="contact-input-box">
                                <textarea required="required" placeholder=' '></textarea>
                                <span>Escribi tu mensaje...</span>
                            </div>

                            <div className="contact-input-box">
                                <input type="submit" name="" value="Enviar" className="btn-contacto" />
                            </div>

                        </div>

                    </div>

                </section>

            </div>

            <div className='features-contact'>

                <div className='body-contact-features'>

                    <Features />

                </div>

            </div>

            <Footer />

        </div>

    );

};

export default Contacto;