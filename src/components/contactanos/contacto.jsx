import React from "react";
import "./contacto.css";
import Footer from "../footer/footer";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import { Link } from "react-router-dom";



function Contacto() {


    return (

        <div>

            <header className="header-contacto">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Comunicate con nosotros</span>
                    </h1>

                    <Link to="/" className="btn">Inicio</Link>

                </div>

            </header>


            <Footer />

        </div>

    );

};

export default Contacto;