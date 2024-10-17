import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
// import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <AboutMe/>,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/Resume',
        element: <Resume/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
