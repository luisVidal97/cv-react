import React, { useEffect, useRef } from 'react';

export const Navbar = () => {

    const itemsNavbar = useRef(null);

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

    const showMenu = () => {
        const items = itemsNavbar.current;
        console.log(items);
        items.classList.toggle('navbar__actived-menu');
        
    }

    return (
        <section id="navbar">
            <nav className="navbar__container">

                <div className="navbar__brand">
                    <a href="#banner"> <span>L</span>UIS <span>C</span>RUCES</a>
                </div>

                <div className="navbar__navigator">
                    <div className="navbar__hamburger" onClick={showMenu}> 
                        <div className="navbar__hamburger-bar1"></div> 
                        <div className="navbar__hamburger-bar2"></div> 
                        <div className="navbar__hamburger-bar1"></div> 
                    </div>
                    <ul ref={itemsNavbar} className="itemsNavigator">
                        <li><a href="#home" onClick={showMenu}>Home</a></li>
                        <li><a href="#projects" onClick={showMenu}>Projects</a></li>
                        <li><a href="#about" onClick={showMenu}>About me</a></li>
                        <li><a href="#skills" onClick={showMenu}>Skills</a></li>
                        <li><a href="#contact" onClick={showMenu}>Contact</a></li>
                    </ul>
                </div>
                
            </nav>
        </ section>
    )
}
