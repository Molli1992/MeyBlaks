import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import IMGabout1 from "../../img/imagen-about-1.jpeg";
import IMGabout2 from "../../img/imagen-about-2.jpeg";
import IMGabout3 from "../../img/imagen-about-3.jpeg";

function About() {
  return (
    <section className="section-about">
      <div className="u-text-position u-margin-bottom-80">
        <h2 className="heading-secondary">
          Mas de 15 años junto a los egresados
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary">Nuestra Forma de trabajo</h3>

          <p className="paragraph">
            Entendemos que es un momento crucial e importante para los egresados
            es por esto que trabajamos para cumplir con nuestros objetivos en
            tiempo y forma. Hacemos partícipes del proceso de producción a
            aquellos que deseen visualizar las etapas del mismo. De este modo
            logramos mayor tranquilidad y un seguimiento detallado del mismo.
            Hacer partícipe a los chicos y padres (si así lo quisiesen) desde
            que se inicia el contrato hasta la entrega final del buzo.
          </p>

          <h3 className="heading-tertiary">QUIENES SOMOS</h3>

          <p className="paragraph">
            MeyBlaks es una empresa familiar que se dedica desde hace 15 años al
            rubro de los egresados. Manejada por sus dueños ofrecemos un
            servicio personalizado para que en tu último año de colegio tengas
            tu buzo o campera en tiempo, forma y como te lo imaginaste.
          </p>

          <Link to="/contact" className="btn-text">
            Contactanos &rarr;
          </Link>
        </div>

        <div className="col-2-of-2">
          <div className="composition">
            <img
              src={IMGabout1}
              alt="Diseño"
              className="composition_photo composition_photo--p1"
            />

            <img
              src={IMGabout2}
              alt="Diseño"
              className="composition_photo composition_photo--p2"
            />

            <img
              src={IMGabout3}
              alt="Diseño"
              className="composition_photo composition_photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
