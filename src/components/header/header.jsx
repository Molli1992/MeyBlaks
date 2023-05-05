import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


function header() {


    return (

        <header className="header">

            <div className="container">

                <div className="logo">
                    <img src="" alt="Logo" />
                </div>

                <div className="boton">
                    <label for="btn-menu">Menu</label>
                </div>

                <input type="checkbox" id="btn-menu"></input>

                <nav className="menu">

                    <Link to="/" className="rutasNav">
                        Inicio
                    </Link>

                    <Link to="/diseño" className="rutasNav">
                        Diseña tu prenda
                    </Link>

                    <Link to="/contacto" className="rutasNav">
                        Contacto
                    </Link>

                    <Link to="/servicios" className="rutasNav">
                        Quienes somos ?
                    </Link>

                </nav>

            </div>

        </header>

    );

};


export default header;