import React from 'react';
import { Mail, Send } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiResearchgate } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info glass-card">
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              Whether you have a question, a project opportunity, or just want to say hi,
              feel free to reach out. I'm currently looking for internship opportunities!
            </p>

            <div className="social-links">
              <a href="mailto:imandisenarath@gmail.com" className="social-link">
                <div className="social-icon">
                  <Mail size={24} />
                </div>
                <span>imandisenarath@gmail.com</span>
              </a>
              <a href="https://github.com/ImandiSenarath" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <FiGithub size={24} />
                </div>
                <span>ImandiSenarath</span>
              </a>
              <a href="https://linkedin.com/in/imandi-senarath-69840825b" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <FiLinkedin size={24} />
                </div>
                <span>Imandi Senarath</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <FiInstagram size={24} />
                </div>
                <span>Imandi Senarath</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <FiFacebook size={24} />
                </div>
                <span>Imandi Senarath</span>
              </a>
              {/*(<a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <SiResearchgate size={24} />
                </div>
                <span>ResearchGate</span>
              </a>)*/}
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
