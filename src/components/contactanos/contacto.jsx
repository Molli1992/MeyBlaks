import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./contacto.css";
import Footer from "../footer/footer";
import Logo from "../../logo/logo meyblaks-01.png";
import Navigation from "../navigation/navigation";
import Features from "../features/features";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contacto() {
  const location = useLocation();
  const form = useRef();
  const [state, setState] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientColegio: "",
    clientProvincia: "",
    clientLocalidad: "",
    clientPromo: "",
    clientMessage: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{8,}$/;
    return re.test(phone);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setState(true);

    const {
      clientName,
      clientEmail,
      clientPhone,
      clientColegio,
      clientProvincia,
      clientLocalidad,
      clientPromo,
      clientMessage,
    } = formData;

    if (
      !clientName ||
      !clientEmail ||
      !clientPhone ||
      !clientColegio ||
      !clientProvincia ||
      !clientLocalidad ||
      !clientPromo ||
      !clientMessage
    ) {
      Swal.fire({
        title: "Info!",
        text: "Por favor completá todos los campos.",
        icon: "info",
        confirmButtonText: "OK",
      });
      setState(false);
      return;
    }

    if (!validateEmail(clientEmail)) {
      Swal.fire({
        title: "Info!",
        text: "El email ingresado no es válido.",
        icon: "info",
        confirmButtonText: "OK",
      });
      setState(false);
      return;
    }

    if (!validatePhone(clientPhone)) {
      Swal.fire({
        title: "Info!",
        text: "El teléfono ingresado no es válido (mínimo 8 dígitos, solo números).",
        icon: "info",
        confirmButtonText: "OK",
      });
      setState(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/emails/meyBlaksEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el mensaje");
      }

      Swal.fire({
        title: "Éxito!",
        text: "Tu mensaje fue enviado correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientColegio: "",
        clientProvincia: "",
        clientLocalidad: "",
        clientPromo: "",
        clientMessage: "",
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Hubo un error al enviar el mensaje. Intentá más tarde.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setState(false);
    }
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
                  <IoLocation className="icons-contact" />
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
                  <FaPhoneVolume className="icons-contact" />
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Telefono</h3>
                  <p className="contact-p-2">115-596-7462</p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">
                  <IoMdMail className="icons-contact" />
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Email</h3>
                  <p className="contact-p-2">meyblaks@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <h2 className="contact-form-h2">Enviar Mensaje</h2>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="clientName"
                    required
                    placeholder=" "
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                  />
                  <span>Nombre</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="email"
                    name="clientEmail"
                    required
                    placeholder=" "
                    value={formData.clientEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, clientEmail: e.target.value })
                    }
                  />
                  <span>Email</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="number"
                    name="clientPhone"
                    required
                    placeholder=" "
                    value={formData.clientPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, clientPhone: e.target.value })
                    }
                  />
                  <span>Celular</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="clientColegio"
                    required
                    placeholder=" "
                    value={formData.clientColegio}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        clientColegio: e.target.value,
                      })
                    }
                  />
                  <span>Colegio</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="clientProvincia"
                    required
                    placeholder=" "
                    value={formData.clientProvincia}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        clientProvincia: e.target.value,
                      })
                    }
                  />
                  <span>Provincia</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="clientLocalidad"
                    required
                    placeholder=" "
                    value={formData.clientLocalidad}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        clientLocalidad: e.target.value,
                      })
                    }
                  />
                  <span>Localidad</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="clientPromo"
                    required
                    placeholder=" "
                    value={formData.clientPromo}
                    onChange={(e) =>
                      setFormData({ ...formData, clientPromo: e.target.value })
                    }
                  />
                  <span>Promo</span>
                </div>

                <div className="contact-input-box">
                  <textarea
                    required
                    name="clientMessage"
                    placeholder=" "
                    value={formData.clientMessage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        clientMessage: e.target.value,
                      })
                    }
                  ></textarea>
                  <span>Escribí tu mensaje...</span>
                </div>

                {state ? (
                  <div className="loader">
                    <LoadingOutlined />
                  </div>
                ) : (
                  <div className="contact-input-box">
                    <input
                      type="submit"
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
