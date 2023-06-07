import React from "react";
import "./header.css";
import Logo from "../../logo/logo meyblaks-01.png";
import { Link } from "react-router-dom";


function Header() {



    return (

        <header className="header">

            <div className="logo-box">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <div className="text-box">

                <h1 className="heading-primary">
                    <span className="heading-primary-main">MeyBlaks</span>
                    <span className="heading-primary-sub">Te acompañamos con tu Diseño</span>
                </h1>

                <Link to="/diseño" className="btn">Diseña</Link>

            </div>

        </header>

    );

};

export default Header;