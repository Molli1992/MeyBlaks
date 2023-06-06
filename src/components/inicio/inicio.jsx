import React from "react";
import "./inicio.css";
import Header from "../header/header";
import About from "../about/about";
import Features from "../features/features";
import Cards from "../card/card";
import Reviews from "../reviews/reviews";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";



function Inicio() {


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