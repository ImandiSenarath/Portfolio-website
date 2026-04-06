import React from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';
import './Hero.css';
import cvFile from '../pdf/Imandi_Senarath.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-content animate-fade-in">
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title">
          Imandi <span>Senarath</span>
        </h1>
        <h3 className="hero-role">Final Year Undergraduate | Researcher</h3>


        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={20} />
          </a>
          <a href={cvFile} download="Imandi_Senarath_CV.pdf" className="btn btn-secondary">
            Download CV <Download size={20} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
