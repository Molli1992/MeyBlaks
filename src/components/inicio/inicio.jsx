import React from "react";
import Slider from "../slider/slider";
import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';
import "./inicio.css";

function Inicio() {

    const diseño = () => {
        window.location.href = "/diseño"
    };


    return (

        <div className="body-inicio">

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="titulo-inicio">
                <ion-icon name="brush-outline" size="large"></ion-icon>
                <h1>Hola! Es el momento para diseñar tu campera</h1>
                <ion-icon name="heart-outline" size="large"></ion-icon>
            </div>
            <br></br>
            <div className="sub-titulo-inicio">

                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
                <h5>Seguinos en Redes Sociales</h5>

            </div>

            <br></br>

            <Slider />

            <br></br>

            <Card
                className="card-inicio"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack className="stack-inicio-img">

                    <Image
                        objectFit='cover'
                        className="stack-img"
                        src='https://www.mercado.genganar.com/img/cms/2022/P%C3%A1ginas%20externas/Ilustraci%C3%B3n.png'
                        alt='Envios a todo el pais'
                    />


                </Stack>

                <Stack className="stack-inicio-text">

                    <Heading size='md'>¡Reuniones a domicilio en CABA y Gran Bs. As.!</Heading>

                    <Text py='2'>
                        ¡Consultanos por las reuniones a domicilio, sin cargo!
                    </Text>

                    <Text py='2' >
                        ¡Tambien contamos con envios a todo el Pais!
                    </Text>

                </Stack>

            </Card>

            <Card
                className="card-inicio"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack className="stack-inicio-text">

                    <Heading size='md'>¡ Diseña tu Prenda !</Heading>

                    <Text py='2'>
                        ¿Sabías que podés diseñarla en 4 simples y divertidos pasos?
                    </Text>

                    <button className="button-inicio-prenda" onClick={diseño}>Comenza!</button>

                </Stack>

                <Stack className="stack-inicio-img-2">

                    <Image
                        objectFit='cover'
                        className="stack-img-2"
                        src='https://v3core.blue/uploads/charly/masters/63/campera-velez-miniatura.png'
                        alt='Diseña tu prenda'
                    />


                </Stack>

            </Card>

        </div>

    );

};

export default Inicio;