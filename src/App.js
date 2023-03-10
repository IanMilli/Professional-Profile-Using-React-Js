
import { BrowserRouter as Router,  Route, Routes , } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Personal from "./pages/Personal";
import Voluntary from "./pages/Voluntary";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";
import Solo from "./pages/Solo";



import Navigation from './components/Navbar.jsx';
import Footer from './components/footer.js';

import "./assets/fonts/NewtSerifBold-Italic.otf"


function App() {
  return (
    <Router >
      <Navigation />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Projects" element={<Projects />} />
        <Route  path="/Projects/Personal" element={<Personal />} />
        <Route  path="/Projects/Personal/Solo" element={<Solo />} />
        <Route  path="/Projects/Voluntary" element={<Voluntary />} />
        <Route  path="/Projects/Professional" element={<Professional />} />
        <Route  path="/Contact" element={<Contact />} />

       

        </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
