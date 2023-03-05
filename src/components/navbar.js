import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function NavBar() {
  return (
    <Navbar expand="lg" className='navigation'>
      <img src='../images/logoNav.png' href="#home"id="logoNav" alt='logo Img'></img>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav >
            <Nav.Link href="/Home"className="home" ><h2>Home</h2></Nav.Link>
            <Nav.Link href="/About"className="about"><h2>About <i className="fa fa-heart"></i></h2></Nav.Link>
            <Nav.Link href="/Projects"className="projects"><h2>Projects</h2></Nav.Link>
            <NavDropdown  title="Lets Connect!" id="connect-nav-dropdown">
              <NavDropdown.Item href="tel:+4407498174271">
                Phone
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto:ianmillichamp.2@gmail.com">Email</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/ian-millichamp/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/IanMilli">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://drive.google.com/file/d/1K5jShP_8ROMvbdFBl_IGcTLy-VllgJRN/view?usp=sharing"className="resume"><h2>Resume</h2></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;