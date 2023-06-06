import React from "react";
import "./about.css";



function About() {


    return (

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

                    <a href="/contact" className="btn-text">Contactanos &rarr;</a>

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

    );

};

export default About;