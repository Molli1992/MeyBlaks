import React from 'react';
import "./card.css";



function Cards() {



    return (

        <div className="body-card">

            <div className="u-center-text u-margin-bottom-80">

                <h2 className="heading-secondary">
                    Algunos de nuestros trabajos
                </h2>

            </div>

            <div className='card-container'>

                <div className="card-Card">

                    <div className="card-side front">

                        <div className='card-picture card-picture-1'>
                            &nbsp;
                        </div>

                        <h4 className='card-heading'>
                            <span className='card-heading-span card-heading-span-1'>Bola de Nieve</span>
                        </h4>

                        <div className='card-detail'>
                            <ul>
                                <li>Colegio Labarden</li>
                                <li>Año 2017</li>
                                <li>100% algodon</li>
                                <li>Unisex</li>
                                <li>Capucha</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card-side back back-1">
                        <div className='card_cta'>
                            <a href='#' className='btn-card-back'>Ver</a>
                        </div>
                    </div>

                </div>

                <div className="card-Card">

                    <div className="card-side front">

                        <div className='card-picture card-picture-2'>
                            &nbsp;
                        </div>

                        <h4 className='card-heading'>
                            <span className='card-heading-span card-heading-span-2'>Aslan</span>
                        </h4>

                        <div className='card-detail'>
                            <ul>
                                <li>Colegio San Juan</li>
                                <li>Año 2020</li>
                                <li>Algodon</li>
                                <li>Solo Chicos</li>
                                <li>Capucha</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card-side back back-2">
                        <div className='card_cta'>
                            <a href='#' className='btn-card-back'>Ver</a>
                        </div>
                    </div>

                </div>

                <div className="card-Card">

                    <div className="card-side front">

                        <div className='card-picture card-picture-3'>
                            &nbsp;
                        </div>

                        <h4 className='card-heading'>
                            <span className='card-heading-span card-heading-span-3'>Corazones</span>
                        </h4>

                        <div className='card-detail'>
                            <ul>
                                <li>Colegio la Unidad</li>
                                <li>2014</li>
                                <li>La Unidad</li>
                                <li>Solo Chicas</li>
                                <li>Capucha</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card-side back back-3">
                        <div className='card_cta'>
                            <a href='#' className='btn-card-back'>Ver</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );

};

export default Cards;