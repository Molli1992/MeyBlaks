import React, { useEffect, useState } from 'react';
import "./homeDiseño.css";
import Logo from "../../logo/logo meyblaks-01.png";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { Link, useLocation } from 'react-router-dom';
import Diseño1 from "./diseño1";
import Diseño2 from "./diseño2";
import Diseño3 from "./diseño3";
import Diseño4 from "./diseño4";
import Diseño5 from "./diseño5";
import Diseño6 from "./diseño6";
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

    const onChangeState1 = () => {

        setState(1);

    };

    const onChangeState2 = () => {

        setState(2);

    };

    const onChangeState3 = () => {

        setState(3);

    };

    const onChangeState4 = () => {

        setState(4);

    };

    const onChangeState5 = () => {

        setState(5);

    };

    const onChangeState6 = () => {

        setState(6);

    };

    const onChangeState7 = () => {

        setState(7);

    };


    return (

        <div>

            <Navigation />

            {state === 1 ?

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

                :

                <header className="header-diseño">

                    <div className="logo-box">
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>

                    <div className="text-box">

                        <h1 className="heading-primary-diseño">
                            <span className="heading-primary-main">MeyBlaks</span>
                            <span className="heading-primary-sub">Diseña tu dibujo</span>
                        </h1>

                        <Link className="btn-diseño" onClick={onChangeState1}>Atras</Link>

                    </div>

                </header>


            }

            {state === 1 ?

                <section className='body-card-diseño'>

                    <h1>Elegi tu diseño</h1>

                    <div className='card-container-diseño'>

                        <div className='card-diseño'>

                            <img src={Remera1Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState3}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState7}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera2Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState4}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState7}>Diseñar</button>

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
                                    onClick={onChangeState6}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Adelante} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState5}>Diseñar</button>

                            </div>


                        </div>

                        <div className='card-diseño'>

                            <img src={Remera3Atras} alt='Diseño'
                                className='img-card-diseño' />

                            <div className='card-text-diseño'>

                                <button className='button-card-diseño'
                                    onClick={onChangeState7}>Diseñar</button>

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

            {state === 3 ?

                < Diseño2 />

                :
                null}

            {state === 4 ?

                < Diseño3 />

                :
                null}

            {state === 5 ?

                < Diseño4 />

                :
                null}

            {state === 6 ?

                < Diseño5 />

                :
                null}

            {state === 7 ?

                < Diseño6 />

                :
                null}


            <Footer />

        </div>

    );

};

export default HomeDiseño;