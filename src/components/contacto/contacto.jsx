import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contacto.css";
import Swal from 'sweetalert2';


function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cd5dmdm', 'template_mht6aun', form.current, 'PvHbawws_-6fNNwSb')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Exito!",
                    text: 'Mail enviado correctamente, le responderemos a la brevedad',
                    icon: "success",
                    confirmButtonText: 'Ok'
                }).then((res) => {
                    window.location.href = `/`
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "Error!",
                    text: 'Error en el envio del mail, intentelo de nuevo mas tarde',
                    icon: "error",
                    confirmButtonText: 'Ok',
                    customClass: {
                        confirmButton: "swalButton"
                    }
                }).then((res) => {
                    window.location.reload();
                });
            });
    };

    const onClickWhatsapp = () => {
        window.open("https://web.whatsapp.com/");
    };


    return (

        <section className='contact'>

            <div className='content'>
                <h2>Contact Us</h2>
                <p>
                    Escribinos por Email a meyeblaks@gmail.com , a traves del formulario o por Whatsapp
                    presionando...
                    <button className='buttonWhatsapp' onClick={onClickWhatsapp}>
                        Aqui...<ion-icon name="logo-whatsapp" size="large"></ion-icon>
                    </button>
                </p>
            </div>

            <div className='container'>

                <div className='contactInfo'>
                    <div className='box'>

                        <div className='box2'>
                            <div className='icon'><ion-icon name="navigate-circle-outline" size="large"></ion-icon></div>
                            <div className='text'>
                                <h2>Address</h2>
                                <p>Intendente Aphalo 292 (planta baja H) - San Isidro</p>
                            </div>
                        </div>

                        <div className='box2'>
                            <div className='icon'><ion-icon name="call-outline" size="large"></ion-icon></div>
                            <div className='text'>
                                <h2>Phone</h2>
                                <p>+54 11 5127-4742</p>
                            </div>
                        </div>

                        <div className='box2'>
                            <div className='icon'><ion-icon name="mail-outline" size="large"></ion-icon></div>
                            <div className='text'>
                                <h2>Email</h2>
                                <p>meyeblaks@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='contactForm'>

                    <form ref={form} onSubmit={sendEmail}>

                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input type='text' name='nombre' required="required" />
                            <span>Full Name</span>
                        </div>

                        <div className='inputBox'>
                            <input type='text' name='mail' required="required" />
                            <span>Email</span>
                        </div>

                        <div className='inputBox'>
                            <textarea name='message' required="required"></textarea>
                            <span>Type your Message...</span>
                        </div>

                        <div className='inputBox'>
                            <input type='submit' value="Send" />
                        </div>

                    </form>

                </div>

            </div>

        </section>

    );

};

export default Contacto;