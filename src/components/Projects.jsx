import React from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Distributed Calculator',
      description: 'A distributed computing application designed to perform complex operations across multiple nodes effectively.',
      tech: ['Java', 'RMI', 'Sockets'],
      github: '#',
      link: '',
      images: [],
    },
    {
      title: 'Crop Prediction System',
      description: 'Machine learning based system to predict the most suitable crop for specific soil and weather conditions.',
      tech: ['Python', 'Scikit-Learn', 'Flask'],
      github: '#',
      link: '',
      images: [],
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                {project.images && project.images.length > 0 && (
                  <div className="project-gallery">
                    <div className="main-image">
                       <img src={project.images[0]} alt="Project Highlight" className="project-img" />
                    </div>
                    <div className="thumbnail-grid">
                      {project.images.slice(1).map((img, i) => (
                        <img key={i} src={img} alt={`Thumbnail ${i+1}`} className="thumbnail-img" />
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="project-desc">{project.description}</p>
                
                {project.features && (
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                
                {project.privacyNote && (
                  <div className="privacy-note">
                    <strong>Data Privacy Note:</strong> {project.privacyNote}
                  </div>
                )}
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                    <FiGithub size={20} />
                    <span>Source</span>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-icon">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
