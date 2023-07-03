import { useState, useCallback } from 'react'
import "./prueba.css";
import IMG from "../../img/buzo1Adelante.png";


function Prueba() {

    return (

        <div className='body-prueba'>

            <img src={IMG} alt="La concha de tu hermana" usemap="#miMapa" />

        </div>

    );

};

export default Prueba;