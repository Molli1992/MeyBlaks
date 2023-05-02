import React from "react";
import "./footer.css";



function Footer() {


    return (

        <footer className="footer">

            <div className="footer-container">

                <nav className="footer-menu">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                    <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                </nav>

            </div>

        </footer>

    );

};


export default Footer;