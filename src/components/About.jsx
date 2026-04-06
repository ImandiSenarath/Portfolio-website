import React from 'react';
import { ShieldCheck, Database, BarChart3, Network, Download } from 'lucide-react';
import './About.css';
import cvFile from '../pdf/Imandi_Senarath.pdf';

const About = () => {
  // ... (keeping interests array unchanged)
  const interests = [
    {
      title: 'Software QA',
      icon: <ShieldCheck size={32} className="interest-icon" />,
      desc: 'Ensuring system reliability and high-quality software delivery.'
    },
    {
      title: 'Database Administration',
      icon: <Database size={32} className="interest-icon" />,
      desc: 'Optimizing data management and database performance.'
    },
    {
      title: 'Business Analysis',
      icon: <BarChart3 size={32} className="interest-icon" />,
      desc: 'Aligning technical solutions with business needs and requirements.'
    },
    {
      title: 'Computer Networking',
      icon: <Network size={32} className="interest-icon" />,
      desc: 'Designing and managing robust network architectures.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container animate-fade-in">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-card">
            <p>
              I am a motivated undergraduate with a strong interest in Software Quality Assurance (QA), Database Administration (DBA), Business Analysis (BA), and Computer Networking. I am passionate about ensuring system reliability, optimizing data management, and aligning technical solutions with business needs. I have developed a solid foundation in software development, databases, and networking through my academic studies. I am detail-oriented, a quick learner, and committed to continuous improvement. I am currently seeking an internship opportunity to gain hands-on experience and contribute to real-world projects, with the goal of becoming a versatile IT professional delivering high-quality solutions.
            </p>


          </div>

          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card glass-card">
                {interest.icon}
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
