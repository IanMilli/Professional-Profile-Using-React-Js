
import { BrowserRouter as Router,  Route, Routes , } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Personal from "./pages/Personal";
import Voluntary from "./pages/Voluntary";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";



import Navigation from './components/navbar.js';
import Footer from './components/footer.js';

import "./assets/fonts/NewtSerifBold-Italic.otf"


function App() {
  return (
    <Router basename="Professional-Profile-Using-React-Js/">
      <Navigation />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Projects" element={<Projects />} />
        <Route  path="/Personal" element={<Personal />} />
        <Route  path="/Voluntary" element={<Voluntary />} />
        <Route  path="/Professional" element={<Professional />} />
        <Route  path="/Contact" element={<Contact />} />
       

        </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
