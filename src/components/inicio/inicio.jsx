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

                    <a href="/diseño" className="btn">Diseño</a>

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
                            </h3>
                        </div>

                        <div className="col-2-of-2">
                            Imagenes
                        </div>

                    </div>

                </section>

            </main>

        </body>

    );

};

export default Inicio;