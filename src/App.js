
import { HashRouter as Router,  Route,  } from "react-router-dom";
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

import NavBar from './components/navbar.js';
import Footer from './components/footer.js';

import "./assets/fonts/NewtSerifBold-Italic.otf"
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router basename="Professional-Profile-Using-React-Js/">
      <NavBar />
      <Container>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Personal" element={<Personal />} />
        <Route exact path="/Voluntary" element={<Voluntary />} />
        <Route exact path="/Professional" element={<Professional />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/BbCentre" element={<BbCentre />} />
        <Route exact path="/IngrediantFy" element={<IngrediantFy />} />
        <Route exact path="/Password" element={< Password />} />
        <Route exact path="/Planner" element={<Planner />} />
        <Route exact path="/Project2" element={<Project2 />} />
        <Route exact path="/ReadMe" element={<ReadMe />} />
        <Route exact path="/Revision" element={<Revision />} />
        <Route exact path="/Weather" element={<Weather />} />

        </Container>
      <Footer/>
    </Router>
  
  );
}

export default App;
