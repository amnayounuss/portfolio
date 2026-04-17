import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Resume from '../components/sections/Resume';
import Education from '../components/sections/Education';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <Skills />
      <Resume />
      <Education />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;