import { Outlet } from "react-router-dom";
import Nav from './components/Navbar';
import HeroSection from "./components/herosection";


function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
