import React, { useEffect } from 'react';

export const Navbar = () => {

    useEffect(() => {
        document.addEventListener('scroll', handleScroll );
    }, []);

    const handleScroll = () =>{
        const navbar = document.querySelector('#navbar');
        const posScroll = window.scrollY;
        navbar.style.backgroundColor = (posScroll > 80 )?
        '#242424'
        :
        'transparent';
        ;
    }

    return (
        <section id="navbar">
            <nav className="navbar__container">
                <div className="navbar__brand">
                    <a href="#banner"> <span>L</span>UIS <span>C</span>RUCES</a>
                </div>
                <div className="navbar__navigator">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </ section>
    )
}
