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

                <div className="container-nosotros-2">
                    <h1 className="h1-nosotros">15 AÑOS DE</h1>
                    <h1 className="h1-nosotros">EXPERIENCIA</h1>
                </div>

                <div className="container-nosotros">

                    <Text className="text-nosotros">
                        MeyBlaks es una empresa familiar que se dedica desde hace 15 años
                        al rubro de los egresados.
                    </Text>

                    <Text className="text-nosotros">
                        Manejada por sus dueños Joaquin Ochoa y Maria Mercedes Blaksley ofrecemos
                        un servicio personalizado para que en tu ultimo año de colegio tengas
                        un buzo o campera en tiempo, forma y como te lo imaginaste.
                    </Text>

                    <Text className="text-nosotros">
                        Es importante PARA NOSOTROS acompañar a quienes estan en su ultimo año de
                        manera cooperativa. Entendemos que es un momento crucial e importante para
                        los egresados. Es por esto que trabajos para cumplir con nuestros objetivos
                        en tiempo y forma.
                    </Text>

                    <Text className="text-nosotros">
                        Hacemos participes del proceso de produccion a aquellos que deseen visualizar
                        las etapas del mismo. De este modo logramos mayor tranquilidad y un seguimiento
                        detallado del mismo.
                    </Text>

                </div>

            </div>

        </div>

    );

};

export default Nosotros;