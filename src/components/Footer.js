import React from 'react';

export const Footer = () => {
    return (
        <section id="footer">
            <a href="#home" className="footer__brand"><span>L</span>UIS <span>C</span>RUCES</a>
            <br />
            <div className="footer__networks" target="blank">
                <a href="https://www.facebook.com/fernando.vidal.526875/">
                    <img alt="Facebook" className="footer_icons" src="./assets/facebook.png" />
                </a>
                <a href="https://github.com/luisVidal97" target="blank">
                    <img alt="GitHub" className="footer_icons" src="./assets/github.png" />
                </a>
                <a href="https://www.instagram.com/fernando.vidal/?hl=es-la" target="blank">
                    <img alt="Instagram" className="footer_icons" src="./assets/instagram.png" />
                </a>
            </div>
            <br />
            <div>
                <p className="footer__text">
                    Copyright &copy; Luis. All rights reserved
                </p>
            </div>
        </section>
    )
}
