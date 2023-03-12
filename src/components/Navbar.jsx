import React from "react";
import { Link, } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/css/Navbar.css';
import logoPic from '../assets/images/logoPic.mp4';







const Navigation = () => {
  return (
    <Navbar expand="lg" className='navigation'>
      <video autoPlay muted src={logoPic} style={{ width: '40vh', height: '20vh', marginLeft: '10vh' }} className="logoNav"/>

      <Container  className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Link style={{ color: '#2F3061', }} to="/" className="home" activeClassName="selected"><h1>Home</h1></Link>
            <Link style={{ color: '#2F3061' }} to="/About" className="about"><h1>About </h1></Link>
            <Link style={{ color: '#2F3061' }} to="/Projects" className="projects"><h1>Projects</h1></Link>
            <Link style={{ color: '#2F3061' }} to={"https://drive.google.com/file/d/1K5jShP_8ROMvbdFBl_IGcTLy-VllgJRN/view?usp=sharing"} className="resume"><h1>Resume</h1></Link>
            <NavDropdown title="Lets Connect !" id="connect-nav-dropdown">
              <NavDropdown.Item id="drop" >
                <Link style={{ color: '#2F3061' }} to="/Contact"><h2><i className="fa fa-address-card" style={{ color: '#6CA6C1' }}></i> Contact Form</h2></Link>

              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop" href="tel:+4407498174271">
                <h2> <i className="fa fa-phone" style={{ color: '#6CA6C1' }}></i> Phone</h2>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item id="drop" href="mailto:ianmillichamp.2@gmail.com"> <h2> <i className="fa fa-envelope" style={{ color: '#6CA6C1' }}></i>    Email </h2></NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item id="drop" href="https://www.linkedin.com/in/ian-millichamp/">
                <h2><i className="fa fa-linkedin" style={{ color: '#6CA6C1' }}></i> LinkedIn</h2>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop" href="https://github.com/IanMilli">
                <h2> <i className="fa fa-github" style={{ color: '#6CA6C1' }}></i> GitHub</h2>
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
}

export default Navigation;