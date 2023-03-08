
import { BrowserRouter as Router,  Route, Routes , } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Personal from "./pages/Personal";
import Voluntary from "./pages/Voluntary";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";

import BbCentre from "./pages/BbCentre.js";
import IngrediantFy from "./pages/IngrediantFy";
import Password from "./pages/Password";
import Planner from "./pages/Planner";
import Project2 from "./pages/Project2";
import ReadMe from "./pages/ReadMe";
import Revision from "./pages/Revision";
import Weather from "./pages/Weather";

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
        <Route  path="/BbCentre" element={<BbCentre />} />
        <Route  path="/IngrediantFy" element={<IngrediantFy />} />
        <Route  path="/Password" element={< Password />} />
        <Route  path="/Planner" element={<Planner />} />
        <Route  path="/Project2" element={<Project2 />} />
        <Route  path="/ReadMe" element={<ReadMe />} />
        <Route  path="/Revision" element={<Revision />} />
        <Route  path="/Weather" element={<Weather />} />

        </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
