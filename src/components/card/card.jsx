import React, { useState } from "react";
import "./card.css";
import IMG1Back from "../../img/michael-ham-back.jpeg";
import IMG2Back from "../../img/imagen-back-2.jpg";
import IMG3Back from "../../img/imagen-back-3.jpeg";
import IMG4Back from "../../img/imagen-back-4.jpeg";
import IMG5Back from "../../img/imagen-back-5.jpg";
import IMG6Back from "../../img/imagen-back-6.jpg";
import IMG7Back from "../../img/imagen-back-7.jpeg";
import IMG8Back from "../../img/imagen-back-8.jpg";
import IMG9Back from "../../img/imagen-back-9.jpeg";
import IMG10Back from "../../img/imagen-back-10.jpg";
import IMG11Back from "../../img/imagen-back-11.jpg";
import IMG12Back from "../../img/imagen-back-12.jpeg";
import IMG13Back from "../../img/imagen-back-13.jpeg";
import IMG14Back from "../../img/imagen-back-14.jpeg";
import IMG15Back from "../../img/imagen-back-15.jpeg";

function Cards() {
  const [state, setState] = useState(1);

  const onChangeStateSuma = () => {
    if (state === 5) {
      setState(1);
    } else {
      let number = state + 1;
      setState(number);
    }
  };

  const onChangeStateResta = () => {
    if (state === 1) {
      setState(5);
    } else {
      let number = state - 1;
      setState(number);
    }
  };

  return (
    <div>
      {state === 1 ? (
        <div className="body-card">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">Algunos de nuestros trabajos</h2>
          </div>

          <div className="card-container">
            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-1">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>Holy Cross</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG2Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-2">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>Michael Ham</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG1Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-3">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>BDMS</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG3Back} alt="Buzos" className="img-back" />
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateResta}
            >
              {" "}
              &larr; Prev
            </button>
            <p className="page">{state}</p>
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateSuma}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : null}

      {state === 2 ? (
        <div className="body-card">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">Algunos de nuestros trabajos</h2>
          </div>

          <div className="card-container">
            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-4">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>ISI Neuquen</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG4Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-5">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>Belgrano Day School</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG5Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-6">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>BDMS</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG6Back} alt="Buzos" className="img-back" />
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateResta}
            >
              {" "}
              &larr; Prev
            </button>
            <p className="page">{state}</p>
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateSuma}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : null}

      {state === 3 ? (
        <div className="body-card">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">Algunos de nuestros trabajos</h2>
          </div>

          <div className="card-container">
            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-7">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>ISJ de PEHUAJO</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG7Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-8">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>Escuela 710 Puerto Madryn</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG8Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-9">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>HINDENBURG Misiones</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG9Back} alt="Buzos" className="img-back" />
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateResta}
            >
              {" "}
              &larr; Prev
            </button>
            <p className="page">{state}</p>
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateSuma}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : null}

      {state === 4 ? (
        <div className="body-card">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">Algunos de nuestros trabajos</h2>
          </div>

          <div className="card-container">
            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-10">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>KENNEDY Buenos Aires</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG10Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-11">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>ICM Chascomus</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG11Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-12">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>ISR Ramallo</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG12Back} alt="Buzos" className="img-back" />
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateResta}
            >
              {" "}
              &larr; Prev
            </button>
            <p className="page">{state}</p>
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateSuma}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : null}

      {state === 5 ? (
        <div className="body-card">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">Algunos de nuestros trabajos</h2>
          </div>

          <div className="card-container">
            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-13">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>IGA Miramar</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG13Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-14">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>Champagnate</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG14Back} alt="Buzos" className="img-back" />
              </div>
            </div>

            <div className="card-Card">
              <div className="card-side front">
                <div className="card-picture card-picture-15">&nbsp;</div>

                <div className="card-detail">
                  <ul>
                    <li>IDFS Buenos Aires</li>
                    <li>Año 2023</li>
                    <li>Friza invisble</li>
                  </ul>
                </div>
              </div>

              <div className="card-side back">
                <img src={IMG15Back} alt="Buzos" className="img-back" />
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateResta}
            >
              {" "}
              &larr; Prev
            </button>
            <p className="page">{state}</p>
            <button
              to="/contact"
              className="button-card"
              onClick={onChangeStateSuma}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cards;
