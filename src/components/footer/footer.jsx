import React from 'react';
import "./footer.css";
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import { Link } from "react-router-dom";



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
                            <li className='footer-item'>
                                <Link to='/contact' className='footer-link'>Company</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/contact' className='footer-link'>Contact us</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/contact' className='footer-link'>Carrers</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/contact' className='footer-link'>Privacy policy</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/contact' className='footer-link'>Terms</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-2-of-2-footer'>
                    <p className='footer-copyright'>
                        Built my <a href="https://github.com/jonasschmedtmann" target="_blank" rel="noreferrer" className='footer-link'> Jonas Schmedtmann </a>
                        for his only course<a href="https://github.com/jonasschmedtmann/advanced-css-course" target="_blank" rel="noreferrer" className='footer-link'> Advance CSS and Sass </a>.
                        Copyrigth &copy; by Jonas Schmedtmann.
                    </p>
                </div>

            </div>

        </footer>

    );

};

export default Footer;