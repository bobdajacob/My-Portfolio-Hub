import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';


function Navbar() {
  const currentPage = useLocation().pathname;

  function checkPath(pathname) {
    return pathname === currentPage ? 'nav-link active' : 'nav-link';
  }

  const linkStyle = { 
    fontSize: '2.5vw',
    display: 'inline',
    margin: '100px',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    background: `url(https://png.pngtree.com/thumb_back/fw800/background/20240620/pngtree-japanese-festival-on-the-night-image_15904198.jpg) center/cover no-repeat`,
    filter: 'grayscale(100%)',
  };

  return (
    <ul className='nav nav-tabs'>
      <li style={linkStyle}>
        <Link to='/' className={checkPath('/')}>
          About Me
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Portfolio' className={checkPath('/Portfolio')}>
          My Portfolio
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Resume' className={checkPath('/Resume')}>
          My Resume
        </Link>
      </li>
      <li style={linkStyle}>
        <Link to='/Contact' className={checkPath('/Contact')}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
