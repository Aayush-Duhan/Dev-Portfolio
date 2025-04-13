import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SkillsSection from '../components/SkillsSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;