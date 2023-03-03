
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Projects from "./pages/Projects";

function Navbar () {return (
  <nav>
    <Link to ="/">Home</Link>
    <Link to ="/">About</Link>
    <Link to ="/">Projects</Link>
   
  </nav>
)}



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
       
      </Routes>
    </Router>
  );
}

export default App;
