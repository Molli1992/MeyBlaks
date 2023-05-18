import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contacto.css";
import { Input } from 'antd';
import Swal from 'sweetalert2';


function Contacto() {

    const { TextArea } = Input;

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


    return (

        <div className='body-contacto'>

            <div className='titulo-contacto'>
                <h1>¡Envianos tu Consulta!</h1>
                <br></br>
                <h4>Podés escribirnos a través de este formulario o al mail info@meye.com.ar</h4>
                <br></br>
                <h4>
                    También podes enviarnos tu consulta por WhatsApp! Hacé click
                    <a className='redes-contacto-button' href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">.    Aquí....<ion-icon name="logo-whatsapp"></ion-icon></a>
                </h4>
            </div>

            <div className='body-form'>

                <form ref={form} onSubmit={sendEmail} className='form-contacto'>

                    <div className='container-intputs'>

                        <div className='container-intputs-1'>
                            <label>Nombre</label>
                            <Input placeholder="Nombre" name='nombre' />

                            <label>Telefono</label>
                            <Input placeholder="Whatsapp / Telefono" name='telefono' />

                            <label>Mail</label>
                            <Input placeholder="Mail" name='mail' />

                            <label>Colegio</label>
                            <Input placeholder="Colegio" name='colegio' />

                            <label>Cantidad</label>
                            <Input placeholder="Cantidad de Alumnos (minimo 12)" name='cantidad' />
                        </div>

                        <div className='container-intputs-2'>
                            <label>Promo</label>
                            <Input placeholder="Año de Egreso" name='promo' />

                            <label>Provincia</label>
                            <Input placeholder="Provincia" name='provincia' />

                            <label>Localidad</label>
                            <Input placeholder="Localidad" name='localidad' />

                            <label>Mensaje</label>
                            <TextArea rows={4} placeholder="Mensaje" name='message' />

                        </div>

                    </div>

                    <div className='boton-contacto'>
                        <Input type="submit" value="Enviar" className='boton-contacto-2' />
                    </div>

                </form>

            </div>

        </div>

    );

};

export default Contacto;