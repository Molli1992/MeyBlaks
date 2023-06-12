import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./inicio.css";
import Header from "../header/header";
import About from "../about/about";
import Features from "../features/features";
import Cards from "../card/card";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import Reviews from '../reviews/reviews';



function Inicio() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (

        <body>

            <Navigation />

            <Header />

            <main>

                <About />

                <Features />

                <Cards />

                <Reviews />

            </main>

            <Footer />

        </body>

    );

};

export default Inicio;