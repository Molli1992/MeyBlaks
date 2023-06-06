import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from "../about/about";
import Footer from "../footer/footer";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import "./sobreNosotros.css";
import Navigation from "../navigation/navigation";




function SobreNosotros() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (

        <div>

            <Navigation />

            <header className="header-about">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MeyBlaks</span>
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