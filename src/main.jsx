import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';



createRoot(document.getElementById('root')).render(<App />)
