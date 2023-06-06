import React from 'react';
import "./footer.css";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";



function Footer() {


    return (

        <footer className='footer'>

            <div className='footer-logo-box'>
                <img src={Logo} alt='Logo' className='footer-logo' />
            </div>

            <div className='row-footer'>

                <div className='col-1-of-2-footer'>
                    <div className='footer-navigation'>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='/contact' className='footer-link'>Company</a></li>
                            <li className='footer-item'><a href='/contact' className='footer-link'>Contact us</a></li>
                            <li className='footer-item'><a href='/contact' className='footer-link'>Carrers</a></li>
                            <li className='footer-item'><a href='/contact' className='footer-link'>Privacy policy</a></li>
                            <li className='footer-item'><a href='/contact' className='footer-link'>Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-2-of-2-footer'>
                    <p className='footer-copyright'>
                        Built my <a href='/contact' className='footer-link'> Jonas Schmedtmann </a>
                        for his only course<a href='/contact' className='footer-link'> Advance CSS and Sass </a>.
                        Copyrigth &copy; by Jonas Schmedtmann.
                    </p>
                </div>

            </div>

        </footer>

    );

};

export default Footer;