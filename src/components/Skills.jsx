import React from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={24} className="skill-icon" />,
      skills: ['ReactJS', 'Flutter', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="skill-icon" />,
      skills: ['ASP.NET Core', 'Node.js', 'FastAPI']
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="skill-icon" />,
      skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'Neo4j']
    },
    {
      title: 'Tools & Tech',
      icon: <Wrench size={24} className="skill-icon" />,
      skills: ['Git', 'GitHub', 'Docker', 'Azure', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
