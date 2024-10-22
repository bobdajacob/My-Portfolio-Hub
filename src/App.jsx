// import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import "./styles/App.css"

function App() {
  return (
  <div className="main-container" >
    <Navbar />
    <HeroSection/>
    <Outlet />
    <Footer />
  </div>
  )
}

export default App;
