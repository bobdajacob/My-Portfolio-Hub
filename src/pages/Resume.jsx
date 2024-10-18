import React from 'react';
import '../styles/Resume.css';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'CSS',
    'HTML',
    'Node.js',
    'TypeScript',
  ];

  return (
    <div className="resume-section">
      <h2>My Resume</h2>
      <a href="/src/assets/MyResume2024.pdf" download className="resume-link">
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul className="proficiency-list">
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
