import React from "react";
import "./features.css";
import { Link } from "react-router-dom";




function Features() {



    return (

        <section className="section-features">

            <div className="row-feature">

                <div className="col-1-of-4">

                    <Link to="/diseño" className="a-features-pincel">

                        <div className="feature-box">

                            <div className="pincel-color">
                                <ion-icon name="brush-outline" size="large"></ion-icon>
                            </div>
                            <h3 className="heading-tertiary">Crea tu diseño</h3>
                            <p className="feature-box_text">
                                En nuestro sitio web tenes la posibilidad de
                                crear tu propio diseño, clickea en la tarjeta
                                para poder DISEÑAR!
                            </p>

                        </div>

                    </Link>

                </div>

                <div className="col-1-of-4">

                    <a href="https://www.instagram.com/meyblaks/" target="_blank" rel="noreferrer" className="a-features-instagram">

                        <div className="feature-box">

                            <div className="instagram-color">
                                <ion-icon name="logo-instagram" size="large"></ion-icon>
                            </div>
                            <h3 className="heading-tertiary">Instagram</h3>
                            <p className="feature-box_text">
                                Conocenos a traves de nuestras redes sociales.
                                Apretando en la tarjeta podes acceder a nuestros
                                Instagram
                            </p>

                        </div>

                    </a>

                </div>

                <div className="col-1-of-4">

                    <a href="https://api.whatsapp.com/send?phone=5491155967462" target="_blank" rel="noreferrer" className="a-features-whatsapp">

                        <div className="feature-box">

                            <div className="whatsapp-color">
                                <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                            </div>
                            <h3 className="heading-tertiary">WhatsApp</h3>
                            <p className="feature-box_text">
                                Si aprietas aqui podras escribirnos por WhatsApp
                                De manera facil y rapida
                            </p>

                        </div>

                    </a>

                </div>

                <div className="col-1-of-4">

                    <Link to="/contact" className="a-features-contactanos">

                        <div className="feature-box">

                            <div className="contactanos-color">
                                <ion-icon name="call-outline" size="large"></ion-icon>
                            </div>
                            <h3 className="heading-tertiary">Contactanos</h3>
                            <p className="feature-box_text">
                                Ingresando en esta seccion podras enviarnos
                                un email, encontrar nuestra dirreccion o
                                nuestro numero telefonico
                            </p>

                        </div>

                    </Link>

                </div>

            </div>

        </section>

    );

};

export default Features;