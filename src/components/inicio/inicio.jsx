import React from "react";
import "./inicio.css";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";

function Inicio() {


    return (

        <body>

            <header className="header">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Meye Blaks</span>
                        <span className="heading-primary-sub">Te acompañamos con tu Diseño</span>
                    </h1>

                    <a href="/diseño" className="btn">Diseña</a>

                </div>

            </header>

            <main>

                <section className="section-about">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Mas de 15 años junto a los egresados
                        </h2>

                    </div>

                    <div className="row">

                        <div className="col-1-of-2">

                            <h3 className="heading-tertiary">
                                Nuestra Forma de trabajo
                            </h3>

                            <p className="paragraph">
                                Entendemos que es un momento crucial e importante para los egresados es por esto que trabajamos para cumplir con nuestros objetivos  en tiempo y forma.
                                Hacemos partícipes del proceso de producción a aquellos que deseen visualizar las etapas del mismo.
                                De este modo logramos mayor tranquilidad y un seguimiento detallado del mismo.
                                Hacer partícipe a los chicos y padres (si así lo quisiesen) desde que se inicia el contrato hasta la entrega final del buzo.
                            </p>

                            <h3 className="heading-tertiary">
                                QUIENES SOMOS
                            </h3>

                            <p className="paragraph">
                                MeyBlaks es una empresa  familiar que se dedica desde hace 15 años al rubro de los egresados.
                                Manejada por sus dueños Joaquín Ochoa y Maria Mercedes Blaksley
                                ofrecemos un servicio personalizado para que en tu último año de colegio tengas tu buzo
                                o campera en tiempo, forma y como te lo imaginaste.
                            </p>

                            <a href="#" className="btn-text">Contactanos &rarr;</a>

                        </div>

                        <div className="col-2-of-2">

                            <div className="composition">

                                <img src="https://i.pinimg.com/564x/cd/56/b5/cd56b534cb8ae56a14bbdcfb1261376a.jpg"
                                    alt="Diseño" className="composition_photo composition_photo--p1" />

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_83lrw4ho0r-74KUlfNGAyjE-pSY2c5VgzbD7M9LG5_o5pv3eNH1J6QTejwCtX7lUOVs&usqp=CAU"
                                    alt="Diseño" className="composition_photo composition_photo--p2" />

                                <img src=" https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg"
                                    alt="Diseño" className="composition_photo composition_photo--p3" />

                            </div>

                        </div>

                    </div>

                </section>

                <section className="section-features">

                    <div className="row-feature">

                        <div className="col-1-of-4">

                            <a href="/diseño" className="a-features-pincel">

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

                            </a>

                        </div>

                        <div className="col-1-of-4">

                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="a-features-instagram">

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

                            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="a-features-whatsapp">

                                <div className="feature-box">

                                    <div className="whatsapp-color">
                                        <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                                    </div>
                                    <h3 className="heading-tertiary">WhatsApp</h3>
                                    <p className="feature-box_text">
                                        Si apretas Tambien podes escribirnos por WhatsApp
                                        De manera facil y rapida
                                    </p>

                                </div>

                            </a>

                        </div>

                        <div className="col-1-of-4">

                            <a href="/contacto" className="a-features-contactanos">

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

                            </a>

                        </div>

                    </div>

                </section>

                <section className="section-diseños">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Diseños mas populares
                        </h2>

                    </div>

                    <div className="row-diseños">

                        <div className="col-1-of-3-diseños">

                            <div className="card">

                                <img src="https://v3core.blue/uploads/web/products/455/buzos-egresados-frente.jpg" alt="Buzo" />

                                <div className="info">
                                    <h1>Bola de Nieve</h1>
                                    <p>
                                        Colegio Labarden , Año 2017.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="col-1-of-3-diseños">

                            <div className="card">

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAQP3otpuO7DSXaj__Y8BvY4UZWzvigCJTg&usqp=CAU" alt="Buzo" />

                                <div className="info">
                                    <h1>Naranju</h1>
                                    <p>
                                        Colegio Nacional , Año 2017.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="col-1-of-3-diseños">

                            <div className="card">

                                <img src="https://v3core.blue/uploads/web/products/453/buzos-egresados-frente.jpg" alt="Buzo" />

                                <div className="info">
                                    <h1>Heading</h1>
                                    <p>
                                        Colegio La Unidad , Año 2017.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </body>

    );

};

export default Inicio;