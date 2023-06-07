import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";



function Navigation() {



    return (
        <div className="navigation">

            <input type="checkbox" className="navigation-checkbox" id="navi-toggle"></input>

            <label for="navi-toggle" className="navigation-button">
                <ion-icon name="menu-outline"></ion-icon>
            </label>

            <label for="navi-toggle" className="navigation-button-X">
                <ion-icon name="close-outline"></ion-icon>
            </label>

            <div className="navigation-background">&nbsp;</div>

            <nav className="navigation-nav">

                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link to="/" className="navigation-link"><span>01</span>Inicio</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/about" className="navigation-link"><span>02</span>Sobre Nosotros</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/contact#" className="navigation-link"><span>03</span>Contactanos</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/diseño" className="navigation-link"><span>04</span>Crea tu Diseño</Link>
                    </li >
                </ul >

            </nav >

        </div >
    );

};

export default Navigation;