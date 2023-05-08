import React from "react";
import "./nosotros.css";
import { Heading, Text } from '@chakra-ui/react';


function Nosotros() {



    return (

        <div className="body-nosotros">

            <div className="container-img-nosotros">
                <img className="img-nosotros"
                    src="https://storage.googleapis.com/bewanted/assets/blog/posts/2019/01/LO_HACEMOS_POR_TI.jpg" alt="Nosotros" />
            </div>

            <div className="container-text-nosotros">

                <div className="container-nosotros">
                    <h1 className="h1-nosotros">17 AÑOS DE</h1>
                    <h1 className="h1-nosotros">EXPERIENCIA</h1>
                </div>

                <div className="container-nosotros">

                    <Text className="text-nosotros">
                        Somos una gran familia trabajando en equipo.
                    </Text>

                    <br></br>

                    <Text className="text-nosotros">
                        Tenemos la suerte de trabajar en lo que amamos: convertir el sueño de
                    </Text>
                    <Text className="text-nosotros">
                        una camada, en un campera de egresados.
                    </Text>

                    <br></br>

                    <Text className="text-nosotros">
                        Nacimos hace mas de 15 años, con la idea que se puede ofrecer la mejor calidad
                    </Text>
                    <Text className="text-nosotros">
                        del mercado a un precio justo. Hoy lo hacemos realidad y damos garantía
                    </Text>
                    <Text className="text-nosotros">
                        de eso.
                    </Text>

                    <br></br>

                    <Text className="text-nosotros">
                        Nos apasiona lo nuevo y nos motiva lo que está por venir.
                    </Text>
                    <Text className="text-nosotros">
                        Creemos en el respeto hacia el otro, como un estilo de vida que da
                    </Text>
                    <Text className="text-nosotros">
                        carácter a lo que hacemos.
                    </Text>

                    <br></br>

                    <Text className="text-nosotros">
                        Escuchamos y aprendemos.Nos movemos, crecemos. Soñamos.
                    </Text>
                    <Text className="text-nosotros">
                        Celebramos lo diferente y lo distinto. Con vos y con quien quiera subirse.
                    </Text>

                    <br></br>

                    <Text className="text-nosotros">
                        Si podes imaginarlo, podemos armarlo.
                    </Text>

                </div>

            </div>

        </div>

    );

};

export default Nosotros;