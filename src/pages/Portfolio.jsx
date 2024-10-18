import React from 'react';
import '../styles/Portfolio.css';

const portfolioApplications1 = [
  {
    imgSrc: 'src/assets/Travelapp.PNG',
    deployedUrl: 'https://gar-bot.github.io/GitHappens/',
    githubUrl: 'https://github.com/Gar-bot/GitHappens',
  },
]

const portfolioApplications2 = [{
  title: 'Application 2',
  imgSrc: 'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg',
  deployedUrl: '',
  githubUrl: '',
}]
  // {
  //   title: 'Application 2',
  //   imgSrc: '',
  //   deployedUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   title: 'Application 3',
  //   imgSrc: '',
  //   deployedUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   title: 'Application 4',
  //   imgSrc: '',
  //   deployedUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   title: 'Application 5',
  //   imgSrc: '',
  //   deployedUrl: '',
  //   githubUrl: '',
  // },
  // {
  //   title: 'Application 6',
  //   imgSrc: '',
  //   deployedUrl: '',
  //   githubUrl: '',
  // },

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">That'sTrippy - Vacation Destination Recommendation App</h2>
      <div className="portfolio-grid">
        {portfolioApplications1.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imgSrc} alt={item.title} className="portfolio-image" />
            {/* <h3>{item.title}</h3> */}
            <div className="portfolio-links">
              <a href={item.deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">ViewGitHub Repo</a>
            </div>
          </div>
        ))}
        <h2 className="portfolio-title">Coming Soon!</h2>
        {portfolioApplications2.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imgSrc} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <div className="portfolio-links">
              <a href={item.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        ))}
        {/* <h2 className="portfolio-title">More!</h2>
        {portfolioApplications2.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imgSrc} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <div className="portfolio-links">
              <a href={item.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          ))} */}
      </div>
    </section>
  );
}



export default Portfolio;


