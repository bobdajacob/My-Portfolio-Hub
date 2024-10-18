import '../styles/App.css';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
  fontSize: '30px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  animation: 'fadeIn 2s ease-out',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px',
}

const headingStyles = {
  fontWeight: 'bold',
  marginBottom: '20px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
};

const paragraphStyles = {
  margin: '0',
  lineHeight: '3',
};

export default function AboutMe() {
  return (
    <div>
      <div style={styles}>
        <h1 style={headingStyles}>About Me</h1>
        <p style={paragraphStyles}>
          Hello! My name is Bob, a passionate and eager software developer just starting my journey into the world of coding. I'm excited to dive deeper into building software that solves real-world problems. As I develop my skills in JavaScript, TypeScript, React, and Node.js, I'm building a solid foundation and honing my abilities as a student in a fast-paced coding bootcamp to accelerate my journey into the tech world. Through my bootcamp, I've had the opportunity to collaborate with others, helping me grow both technically and as a team player. Though I'm early in my career, I'm always eager to learn, collaborate, and grow as part of a development team. My focus is on clean, efficient code and creating user-friendly applications. I'm excited to continue learning, contribute to meaningful projects, and make a positive impact with the software I build.
        </p>
      </div>
    </div>
  );
}
