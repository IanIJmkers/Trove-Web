import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PortfolioShowcase from './components/PortfolioShowcase';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Benefits />
      <PortfolioShowcase />
      <Features />
      <AboutMe />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;