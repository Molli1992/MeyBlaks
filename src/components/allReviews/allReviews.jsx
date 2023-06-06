import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import "./allReviews.css";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";




function AllReviews() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (

        <div>

            <Navigation />

            <header className="header-reviews">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Nuestras Experiencias</span>
                    </h1>

                    <Link to="/" className="btn">Inicio</Link>

                </div>

            </header>

            <section className="section-stories">

                <body className="body-stories">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary-reviews">
                            Reviews
                        </h2>

                    </div>

                    <div className="row-stories">

                        <div className="story">

                            <figure className="storie_shape">
                                <img src="https://media.licdn.com/dms/image/C5603AQGEHCwUPwsf6Q/profile-displayphoto-shrink_800_800/0/1517553329699?e=2147483647&v=beta&t=ZtE0U4efk70LQIEafhEH37YaN-1zCZUs4Wa-C5rBIE4"
                                    alt="Profile" className="storie-img" />
                                <figcaption className="storie_caption">
                                    Caro Presta
                                </figcaption>
                            </figure>

                            <div className="storie_text">

                                <h3 className="heading-tertiary">Increible experiencia GRACIAS!</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id officiis
                                    iure eligendi cum porro nulla similique perferendis aliquam, repellat
                                    doloribus deleniti a vero aspernatur, necessitatibus placeat!
                                    Veniam praesentium ipsum ut.
                                </p>

                            </div>

                        </div>

                        <div className="story">

                            <figure className="storie_shape">
                                <img src="https://media.c5n.com/p/98bf10bbc70b91d82b6aa47babaa5c78/adjuntos/326/imagenes/000/113/0000113697/790x0/smart/emilia-mernesjpgjpg.jpg"
                                    alt="Profile" className="storie-img" />
                                <figcaption className="storie_caption">
                                    Emilia Mernes
                                </figcaption>
                            </figure>

                            <div className="storie_text">

                                <h3 className="heading-tertiary">Increible experiencia GRACIAS!</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id officiis
                                    iure eligendi cum porro nulla similique perferendis aliquam, repellat
                                    doloribus deleniti a vero aspernatur, necessitatibus placeat!
                                    Veniam praesentium ipsum ut.
                                </p>

                            </div>

                        </div>

                        <div className="story">

                            <figure className="storie_shape">
                                <img src="https://media.licdn.com/dms/image/C5603AQHV9ynYO_Q81g/profile-displayphoto-shrink_800_800/0/1652105716660?e=2147483647&v=beta&t=dQzaozAIa14OfBScXQUxUqE1igudbHIVNBrlXvRR_MA"
                                    alt="Profile" className="storie-img" />
                                <figcaption className="storie_caption">
                                    Felipe Blaksley
                                </figcaption>
                            </figure>

                            <div className="storie_text">

                                <h3 className="heading-tertiary">Increible experiencia GRACIAS!</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id officiis
                                    iure eligendi cum porro nulla similique perferendis aliquam, repellat
                                    doloribus deleniti a vero aspernatur, necessitatibus placeat!
                                    Veniam praesentium ipsum ut.
                                </p>

                            </div>

                        </div>

                    </div>

                </body>

            </section>

            <Footer />

        </div>

    );

};

export default AllReviews;