import React from "react";
import "./inicio.css";
import Header from "../header/header";
import About from "../about/about";
import Features from "../features/features";
import Card from "../card/card";
import Reviews from "../reviews/reviews";



function Inicio() {


    return (

        <body>

            <Header />

            <main>

                <About />

                <Features />

                <Card />

                <Reviews />

            </main>

        </body>

    );

};

export default Inicio;