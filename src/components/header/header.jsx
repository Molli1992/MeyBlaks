import React from "react";
import "./header.css";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";


function Header() {



    return (

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

    );

};

export default Header;