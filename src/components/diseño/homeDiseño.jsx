import React, { useEffect, useState } from 'react';
import "./homeDiseño.css";
import Logo from "../../logo/logo meyblaks-01.png";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { Link, useLocation } from 'react-router-dom';
import Diseño1 from "./diseño1";
import Remera1Adelante from "../../img/remera1Adelante.png";
import Remera2Adelante from "../../img/remera2Adelante.png";
import Remera3Adelante from "../../img/remera3adelante.png";
import Remera3Atras from "../../img/remera3Atras.png";
import Buzo1Adelante from "../../img/buzo1Adelante.png";
import Buzo1Atras from "../../img/buzo1Atras.png";




function HomeDiseño() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [state, setState] = useState(1);

    const onChangeState2 = () => {

        setState(2);

    };


    return (

        <div>

            <Navigation />

            <header className="header-diseño">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary-diseño">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Es momento de Crear</span>
                    </h1>

                    <Link to="/" className="btn-diseño">Inicio</Link>

                </div>

            </header>

            {state === 1 ?

                <section className='body-card-diseño'>

                    <h1>Elegi tu diseño</h1>

                    <div className='card-container-diseño'>

                        <div className='card-diseño'>

                            <img src={Remera1Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera2Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Buzo1Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Buzo1Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                    </div>


                </section>

                :
                null}

            {state === 2 ?

                < Diseño1 />

                :
                null}

            <Footer />

        </div>

    );

};

export default HomeDiseño;