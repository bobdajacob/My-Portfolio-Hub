import { Link, useLocation } from 'react-router-dom';
import '../styles/index.css';

function Navbar() {
  const currentPage = useLocation().pathname;

  function checkPath(pathname) {
    return pathname === currentPage ? 'nav-link shadow-lg' : 'nav-link';
  }

  const linkStyle = { 
    fontSize: '2.5vw',
    display: 'inline',
    margin: '100px',
    justifyContent: 'space-around',
  };

  return (
    <ul className='nav nav-tabs'>
      <li style={linkStyle} className="about-me">
        <Link to='/' className={checkPath === '/' ? 'nav-link active' : 'nav-link'}>
          About Me
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Portfolio' className={checkPath === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
          My Portfolio
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Resume' className={checkPath === '/Resume' ? 'nav-link active' : 'nav-link'}>
          My Resume
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Contact' className={checkPath === '/Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
