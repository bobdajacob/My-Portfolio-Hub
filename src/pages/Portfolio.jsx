import React from "react";
import "../styles/portfolio.css";

const titleStyle = {
  color: 'coral',
  textShadow: '0 0 5px #E6E6FA, 0 0 10px #E6E6FA, 0 0 15px #D8BFD8, 0 0 20px #D8BFD8',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  fontSize: '2rem',
}

const linkStyle = {
  color: 'black',
  fontWeight: 'bold',
}

const projects = [
  {
    title: `That's Trippy Vacation App`,
    imgSrc: '../src/assets/Travelapp.PNG',
    deployedUrl: 'https://gar-bot.github.io/GitHappens/',
    githubUrl: 'https://github.com/Gar-bot/GitHappens',
  },
  {
    // imgSrc: 'src/assets/Travelapp.PNG',
    title: 'Coming Soon',
    imgSrc: 'https://img.freepik.com/free-vector/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591.jpg',
    deployedUrl: '',
    githubUrl: '',
  },
  {
    // imgSrc: 'src/assets/Travelapp.PNG'
    title: 'Coming soon',
    imgSrc: 'https://img.freepik.com/free-vector/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591.jpg',
    deployedUrl: '',
    githubUrl: '',
  },
  {
    // imgSrc: 'src/assets/Travelapp.PNG',
    title: 'Coming soon',
    imgSrc: 'https://img.freepik.com/free-vector/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591.jpg',
    deployedUrl: '',
    githubUrl: '',
  },
  {
    // imgSrc: 'src/assets/Travelapp.PNG',
    title: 'Coming soon',
    imgSrc: 'https://img.freepik.com/free-vector/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591.jpg',
    deployedUrl: '',
    githubUrl: '',
  },
  {
    // imgSrc: 'src/assets/Travelapp.PNG',
    title: 'Coming soon',
    imgSrc: 'https://img.freepik.com/free-vector/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591.jpg',
    deployedUrl: '',
    githubUrl: '',
  }
];

function Portfolio() {
  return (
    <>
      <div className="parent-box">
        {projects.map((project) => {
          return (
          <div className="box">
            <h1 style={titleStyle}>{project.title}</h1>
            <div 
              className="box-photo"
              style={{
                backgroundImage: `url(${project.imgSrc})`
              }}
              ></div>
              <a style={linkStyle} href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
              <a style={linkStyle} href={project.githubUrl} target="_blank" rel="noopener noreferrer">ViewGitHub Repo</a>
          </div>
          );
        })}
      </div>
    </>
  );
}

export default Portfolio;
