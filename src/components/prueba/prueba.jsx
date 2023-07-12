import { useState, useCallback } from 'react'
import "./prueba.css";
import IMG from "../../img/buzo1Adelante.png";


function Prueba() {

    return (

        <div className='body-prueba'>

            <map name="image-map">
                <area alt="" title="" href="" coords="303,61 290,62 272,70 257,85 246,102 240,125 249,148 260,174 270,190 289,202 302,214 318,205 340,188 354,155 365,132 359,100 343,77 329,64 313,61 " shape="polygon" />
            </map>

            <img src={IMG} usemap="#image-map" alt="Imagen sectorizada" />

        </div>

    );

};

export default Prueba;