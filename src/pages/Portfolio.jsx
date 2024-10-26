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
    imgSrc: 'https://files.oaiusercontent.com/file-aoocqUwtLAkL0vY3s5ruaOHo?se=2024-10-26T02%3A15%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db4553911-f7b5-49b3-8730-34c25a80453f.webp&sig=QY98CesvK1dkg8SRqcGPrbQdA0qokqr6RJPRy22EmAI%3D',
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
