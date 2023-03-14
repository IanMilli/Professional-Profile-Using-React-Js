
import { BrowserRouter as Router,  Route, Routes , } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Personal from "./pages/Personal";
import Voluntary from "./pages/Voluntary";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";
import Solo from "./pages/Solo";
import Interests from "./pages/Interests";
import Chef from "./pages/Chef.js";
import Collaborated from "./pages/Collaborated";



import Navigation from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import "./assets/fonts/NewtSerifBold-Italic.otf"


function App() {
  return (
    <Router basename="Professional-Profile-Using-React-Js/">
      <Navigation />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Projects" element={<Projects />} />
        <Route  path="/Projects/Personal" element={<Personal />} />
        <Route  path="/Projects/Personal/Solo" element={<Solo />} />
        <Route  path="/Projects/Personal/Collaborated" element={<Collaborated />} />
        <Route  path="/Projects/Voluntary" element={<Voluntary />} />
        <Route  path="/Projects/Professional" element={<Professional />} />
        <Route  path="/Chef" element={<Chef />} />
        <Route  path="/Interests" element={<Interests />} />
        <Route  path="/Contact" element={<Contact />} />

       

        </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
