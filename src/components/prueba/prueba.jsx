import React from 'react';
import "./prueba.css";
import Buzo from "../../img/buzo1Adelante.png";



function Prueba() {

    return (


        <div className='body-prueba'>

            <img src={Buzo} usemap="#image_map" className='prueba-img' />
            <map name="image_map">
                <area alt="" title="" href="" coords="255,193 243,199 235,203 225,212 215,225 212,248 215,287 217,344 222,380 216,418 213,465 209,505 212,517 219,514 221,489 235,470 248,447 254,436 277,434 309,433 345,434 351,433 360,447 363,458 379,485 385,504 384,512 393,505 393,486 390,448 387,405 384,352 384,290 401,252 397,226 380,210 367,199 358,190 351,189 351,201 342,209 323,214 309,223 304,224 294,218 281,212 270,205 261,199 " shape="polygon" />
            </map>

        </div>

    );

};

export default Prueba;

/* 



            */