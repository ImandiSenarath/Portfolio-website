import React from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'A comprehensive ASP.NET Core MVC application for personal finance management. Features include user authentication, expense tracking with CRUD operations, advanced filtering, and a dynamic dashboard with spending analytics charts.',
      tech: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/ImandiSenarath/personal-expense-tacker.git',
      link: '',
      images: [],
    },
    {
      title: 'To-Do List Application',
      description: 'A full-stack task management system featuring a React-based frontend and a Node.js/Express backend. Implements RESTful APIs and MySQL for persistent data storage, following the MVC architecture pattern.',
      tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'JavaScript'],
      github: 'https://github.com/ImandiSenarath/TodoList_webapp.git',
      link: '',
      images: [],
    },
    {
      title: 'Network Traffic Analyzer',
      description: 'A Python-based tool designed for deep packet inspection and network analysis. It performs protocol analysis (TCP, UDP, DNS, TLS), detects suspicious traffic patterns, and generates visual reports using Matplotlib.',
      tech: ['Python', 'PyShark', 'Wireshark', 'Matplotlib'],
      github: 'https://github.com/ImandiSenarath/Network-Traffic-Analyzer.git',
      link: '',
      images: [],
    },
    {
      title: 'Bodhiraja Preschool Management System',
      description: 'A specialized management portal for Bodhiraja Preschool, streamlining administrative tasks and enhancing educational management through a web-based interface.',
      tech: ['React', 'Vite', 'CSS'],
      github: '',
      link: 'https://bodhirajapreschool.vercel.app/',
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
