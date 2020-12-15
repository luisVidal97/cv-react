import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

