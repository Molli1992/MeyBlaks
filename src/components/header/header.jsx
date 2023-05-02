import { useState } from "react";
import "./header.css";
//import Logo from "../../logo/logo.jpg";



function Header() {

    const [icon, setIcon] = useState("lineas");

    const onClick = (e) => {

        const DropDownMenu = document.querySelector(".dropdown_menu");

        DropDownMenu.classList.toggle("open");

        if (icon === "lineas") {
            setIcon("x");
        } else {
            setIcon("lineas");
        }

    };


    return (

        <header>

            <div className="navbar">

                <div className="logo">
                    <img src="" alt="Logo" />
                </div>

                <ul className="links">

                    <li><button>Diseño</button></li>
                    <li><button>Servicios</button></li>
                    <li><button>Contacto</button></li>
                    <li><button>Nosotros</button></li>

                </ul>

                <button className="action_btn">Inicio</button>

                <button className="toggle_btn" onClick={onClick}>
                    {icon === "lineas" ?
                        <ion-icon name="reorder-four-outline" size="large">
                        </ion-icon> :
                        <ion-icon name="close-outline" size="large">
                        </ion-icon>
                    }
                </button>

                < div className="dropdown_menu">

                    <div>

                        <li><button className="action_btn_responsive">
                            Diseño
                        </button></li>

                        <li><button className="action_btn_responsive">
                            Servicios
                        </button></li>

                        <li><button className="action_btn_responsive">
                            Contacto
                        </button></li>

                        <li><button className="action_btn_responsive">
                            Nosotros
                        </button></li>

                        <li><button className="home_btn_responsive">
                            Inicio
                        </button></li>

                    </div>

                </div>

            </div>

        </header>

    );

};

export default Header;