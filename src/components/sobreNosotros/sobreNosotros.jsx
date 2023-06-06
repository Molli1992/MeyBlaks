import React from "react";
import About from "../about/about";
import Footer from "../footer/footer";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import "./sobreNosotros.css";
import Navigation from "../navigation/navigation";
import { Link } from "react-router-dom";




function SobreNosotros() {


    return (

        <div>

            <Navigation />

            <header className="header-about">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Meye Blaks</span>
                        <span className="heading-primary-sub">Te invitamos a conocernos</span>
                    </h1>

                    <Link to="/" className="btn">Inicio</Link>

                </div>

            </header>

            <About />

            <Footer />

        </div>

    );

};

export default SobreNosotros;