import React from 'react';
import "./card.css";



function Cards() {



    return (

        <div className="body-card">

            <div className="u-center-text u-margin-bottom-80">

                <h2 className="heading-secondary">
                    Nuestros mejores buzos
                </h2>

            </div>

            <div className='card-container'>

                <div className="card">
                    <div className="front">Front Side</div>
                    <div className="back">Back Side</div>
                </div>

                <div className="card">
                    <div className="front">Front Side</div>
                    <div className="back">Back Side</div>
                </div>

                <div className="card">
                    <div className="front">Front Side</div>
                    <div className="back">Back Side</div>
                </div>

            </div>

        </div>

    );

};

export default Cards;