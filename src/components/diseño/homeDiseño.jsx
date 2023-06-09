import React, { useEffect, useState } from 'react';
import "./homeDiseño.css";
import Logo from "../../logo/logo meyblaks-01.png";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { Link, useLocation } from 'react-router-dom';
import Diseño1 from "./diseño1";




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

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                    </div>

                    <div className='card-container-diseño'>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState2}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src='https://www.tresovejas.com.ar/uploads/buzo1.svg' alt='Diseño'
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