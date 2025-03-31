import React from "react";
import "./features.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPaintBrush } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function Features() {
  return (
    <section className="section-features">
      <div className="row-feature">
        <div className="col-1-of-4">
          <Link to="/diseño" className="a-features-pincel">
            <div className="feature-box">
              <div className="pincel-color">
                <FaPaintBrush
                  className="feature-icons"
                  style={{ color: "orangered" }}
                />
              </div>
              <h3 className="heading-tertiary">Crea tu diseño</h3>
              <p className="feature-box_text">
                En nuestro sitio web tenes la posibilidad de crear tu propio
                diseño, clickea en la tarjeta para poder DISEÑAR!
              </p>
            </div>
          </Link>
        </div>

        <div className="col-1-of-4">
          <a
            href="https://www.instagram.com/meyblaks/"
            target="_blank"
            rel="noreferrer"
            className="a-features-instagram"
          >
            <div className="feature-box">
              <div className="instagram-color">
                <FaInstagram
                  className="feature-icons"
                  style={{ color: "blueviolet" }}
                />
              </div>
              <h3 className="heading-tertiary">Instagram</h3>
              <p className="feature-box_text">
                Conocenos a traves de nuestras redes sociales. Apretando en la
                tarjeta podes acceder a nuestros Instagram
              </p>
            </div>
          </a>
        </div>

        <div className="col-1-of-4">
          <a
            href="https://api.whatsapp.com/send?phone=5491155967462"
            target="_blank"
            rel="noreferrer"
            className="a-features-whatsapp"
          >
            <div className="feature-box">
              <div className="whatsapp-color">
                <FaWhatsapp
                  className="feature-icons"
                  style={{ color: "greenyellow" }}
                />
              </div>
              <h3 className="heading-tertiary">WhatsApp</h3>
              <p className="feature-box_text">
                Si aprietas aqui podras escribirnos por WhatsApp De manera facil
                y rapida
              </p>
            </div>
          </a>
        </div>

        <div className="col-1-of-4">
          <Link to="/contact" className="a-features-contactanos">
            <div className="feature-box">
              <div className="contactanos-color">
                <FaPhoneVolume
                  className="feature-icons"
                  style={{ color: "black" }}
                />
              </div>
              <h3 className="heading-tertiary">Contactanos</h3>
              <p className="feature-box_text">
                Ingresando en esta seccion podras enviarnos un email, encontrar
                nuestra dirreccion o nuestro numero telefonico
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
