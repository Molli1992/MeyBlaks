import React from "react";
import "./navigation.css";



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
                        <a href="/" className="navigation-link"><span>01</span>Inicio</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/about" className="navigation-link"><span>02</span>Sobre Nosotros</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/contact#" className="navigation-link"><span>03</span>Contactanos</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/diseño" className="navigation-link"><span>04</span>Crea tu Diseño</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/reviews" className="navigation-link"><span>05</span>Reviews</a>
                    </li>
                </ul>

            </nav>

        </div>
    );

};

export default Navigation;