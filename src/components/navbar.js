import React from "react";
import {Link, } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/navbar.css';
import logoNav from "../assets/images/logoNav.png";





const Navigation = () =>{
  return (
    <Navbar expand="lg" className='navigation'>
      <img src={logoNav} href="#home"id="logoNav" alt='logo Img'></img>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav >
            <Link to="/" className="home" ><h2>Home</h2></Link>
            <Link to="/About" className="about"><h2>About </h2></Link>
            <Link to="/Projects" className="projects"><h2>Projects</h2></Link>
            <Link to={"https://drive.google.com/file/d/1K5jShP_8ROMvbdFBl_IGcTLy-VllgJRN/view?usp=sharing"}className="resume"><h2>Resume</h2></Link>
            <NavDropdown  title="Lets Connect !" id="connect-nav-dropdown">
            <NavDropdown.Item >
            <Link to="/Contact"><i className="fa fa-address-card"></i> Contact Form</Link>
              
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="tel:+4407498174271">
              <i className="fa fa-phone"></i> Phone
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto:ianmillichamp.2@gmail.com"><i className="fa fa-envelope"></i> Email </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/ian-millichamp/">
              <i className="fa fa-linkedin"></i> LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/IanMilli">
              <i className="fa fa-github"></i> GitHub
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;