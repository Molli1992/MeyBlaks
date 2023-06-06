import React from "react";
import "./contacto.css";
import Footer from "../footer/footer";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";



function Contacto() {


    return (

        <div>

            <Navigation />

            <header className="header-contacto">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Contacta con nosotros</span>
                    </h1>

                    <Link to="/diseño" className="btn">Diseña</Link>

                </div>

            </header>

            <section className="contact">

                <div className="contact-content">
                    <h2 className="contact-h2">Contactanos</h2>
                    <p className="contact-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ad ab quidem consequatur culpa repudiandae dolore, deleniti labore incidunt laborum
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
                                    115-127-4742
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
                            <input type="text" name="" required="required" />
                            <span>Nombre</span>
                        </div>

                        <div className="contact-input-box">
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </div>

                        <div className="contact-input-box">
                            <textarea required="required"></textarea>
                            <span>Escribi tu mensaje...</span>
                        </div>

                        <div className="contact-input-box">
                            <input type="submit" name="" value="Enviar" className="btn-contacto" />
                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    );

};

export default Contacto;