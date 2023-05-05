import React from "react";
import "./footer.css";



function Footer() {


    return (

        <footer className="footer">

            <div className="footer-container">

                <nav className="footer-menu">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-whatsapp" size="large"></ion-icon></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                </nav>

            </div>

        </footer>

    );

};


export default Footer;