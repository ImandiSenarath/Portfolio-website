import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mojpprob', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const result = await response.json();
        setErrorMessage(
          result.errors
            ? result.errors.map(error => error.message).join(', ')
            : 'Oops! Something went wrong.'
        );
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">

          {/* LEFT SIDE */}
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

              <a href="#" className="social-link">
                <div className="social-icon">
                  <FiInstagram size={24} />
                </div>
                <span>Imandi Senarath</span>
              </a>

              <a href="#" className="social-link">
                <div className="social-icon">
                  <FiFacebook size={24} />
                </div>
                <span>Imandi Senarath</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-container">

            {status === 'success' ? (
              <div className="success-message glass-card">
                <CheckCircle size={48} className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon.</p>

                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className={`contact-form glass-card ${status === 'submitting' ? 'form-loading' : ''}`}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message here..."
                    required
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="error-message">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;