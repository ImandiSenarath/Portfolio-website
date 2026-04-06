import React from 'react';
import { Layout, Server, Database, Wrench, ClipboardCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={24} className="skill-icon" />,
      skills: ['ReactJS', 'HTML', 'CSS', 'C#', 'Java']
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="skill-icon" />,
      skills: ['Python', 'Django', 'Node.js', 'Express.js', 'REST APIs', 'Firebase']
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="skill-icon" />,
      skills: ['Supabase (PostgreSQL)', 'MSSQL', 'MySQL']
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} className="skill-icon" />,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Wireshark']
    },
    {
      title: 'Other',
      icon: <ClipboardCheck size={24} className="skill-icon" />,
      skills: [
        'Problem Solving', 'Technical Documentation', 'Team Collaboration', 
        'Requirement Gathering & Analysis', 'Use Case & User Story Creation', 
        'Process Modelling (UML, Flowcharts)', 'Data Analysis & Visualization'
      ]
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
