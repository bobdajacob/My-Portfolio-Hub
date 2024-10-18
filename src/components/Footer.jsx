import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="social-icons">
        <a href="https://github.com/bobdajacob" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/bob-jacob-donggon-8099372b0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/humanitys_stgst" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Bob Jacob. All rights reserved.</p>
    </footer>
  );
}

export default Footer;