import React from 'react';
import "./contacto.css";
import { Button, Form, Input } from 'antd';
//import Swal from 'sweetalert2'


function Contacto() {

    const { TextArea } = Input;

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

                <Form
                    labelCol={{ span: 4 }}
                    layout="horizontal"
                    className='form-contacto'
                >

                    <Form.Item label="Nombre">
                        <Input placeholder="Nombre" />
                    </Form.Item>

                    <Form.Item label="Telefono">
                        <Input placeholder="Whatsapp / Telefono" />
                    </Form.Item>

                    <Form.Item label="Mail">
                        <Input placeholder="Mail" />
                    </Form.Item>

                    <Form.Item label="Colegio">
                        <Input placeholder="Colegio" />
                    </Form.Item>

                    <Form.Item label="Cantidad">
                        <Input placeholder="Cantidad de Alumnos (minimo 12)" />
                    </Form.Item>

                </Form>

                <Form
                    labelCol={{ span: 4 }}
                    layout="horizontal"
                    className='form-contacto'
                >

                    <Form.Item label="Promo">
                        <Input placeholder="Año de Egreso" />
                    </Form.Item>

                    <Form.Item label="Provincia">
                        <Input placeholder="Provincia" />
                    </Form.Item>

                    <Form.Item label="Localidad">
                        <Input placeholder="Localidad" />
                    </Form.Item>

                    <Form.Item label="Mensaje">
                        <TextArea rows={4} placeholder="Mensaje" />
                    </Form.Item>

                    <Form.Item>
                        <Button>Enviar</Button>
                    </Form.Item>

                </Form>

            </div>

        </div>

    );

};

export default Contacto;