import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./contacto.css";
import Footer from "../footer/footer";
import Logo from "../../logo/logo meyblaks-01.png";
import Navigation from "../navigation/navigation";
import Features from "../features/features";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";

function Contacto() {
  const location = useLocation();
  const form = useRef();
  const [state, setState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setState(true);

    emailjs
      .sendForm(
        "service_hbl2w5f",
        "template_7xbbuli",
        e.target,
        "tbi5Ki8RtKg_s2RJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "successce",
            text: "Email enviado correctamente",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.href = `/`;
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Error en el envio del Email, por favor intentar luego mas tarde o escribinos por nuestar redes sociales",
            icon: "error",
            confirmButtonText: "Ok",
            customClass: {
              confirmButton: "swalButton",
            },
          }).then(() => {
            window.location.reload();
          });
        }
      );
  };

  return (
    <div>
      <Navigation />

      <header className="header-contacto">
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className="text-box">
          <h1 className="heading-primary-contact">
            <span className="heading-primary-main">MeyBlaks</span>
            <span className="heading-primary-sub">Contacta con nosotros</span>
          </h1>

          <Link to="/" className="btn-contact">
            Inicio
          </Link>
        </div>
      </header>

      <div className="body-contact">
        <section className="contact">
          <div className="contact-content">
            <h2 className="contact-h2">Contactanos</h2>
            <p className="contact-p">
              Esperamos hayas tenido una linda estadia en nuestro sitio web.
              Podes ponerte en contacto con nosotros a traves de nuestras redes
              sociales o por el formulario enviandonos un mail.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Direccion</h3>
                  <p className="contact-p-2">
                    Calle Intendente Aphalo 292 PB H - San Isidro
                  </p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Telefono</h3>
                  <p className="contact-p-2">115-596-7462</p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Email</h3>
                  <p className="contact-p-2">meyblaks@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <h2 className="contact-form-h2">Enviar Mensaje</h2>
              </form>

              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_name"
                    required="required"
                    placeholder=" "
                  />
                  <span>Nombre</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_email"
                    required="required"
                    placeholder=" "
                  />
                  <span>Email</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_celular"
                    required="required"
                    placeholder=" "
                  />
                  <span>Celular</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_colegio"
                    required="required"
                    placeholder=" "
                  />
                  <span>Colegio</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_provincia"
                    required="required"
                    placeholder=" "
                  />
                  <span>Provincia</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_localidad"
                    required="required"
                    placeholder=" "
                  />
                  <span>Localidad</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="from_promo"
                    required="required"
                    placeholder=" "
                  />
                  <span>Promo</span>
                </div>

                <div className="contact-input-box">
                  <textarea
                    required="required"
                    name="message"
                    placeholder=" "
                  ></textarea>
                  <span>Escribi tu mensaje...</span>
                </div>

                {state === true ? (
                  <div className="loader">
                    <LoadingOutlined />
                  </div>
                ) : (
                  <div className="contact-input-box">
                    <input
                      type="submit"
                      name=""
                      value="Enviar"
                      className="btn-contacto"
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>

      <div className="features-contact">
        <div className="body-contact-features">
          <Features />
        </div>
      </div>

      <div className="container-footer-contact">
        <Footer />
      </div>
    </div>
  );
}

export default Contacto;
