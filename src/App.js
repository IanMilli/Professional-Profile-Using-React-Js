
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';

import "./fonts/NewtSerifBold-Italic.otf"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
       
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
