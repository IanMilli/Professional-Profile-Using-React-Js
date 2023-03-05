import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className='navigation'>
      <img src='../images/logoNav.png' href="#home"id="logoNav"></img>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav >
            <Nav.Link href="#home"className="home" ><h2>Home</h2></Nav.Link>
            <Nav.Link href="#about"className="about"><h2>About</h2></Nav.Link>
            <NavDropdown title="Projects" id="projects-nav-dropdown">
              <NavDropdown.Item href="#professional">
                Professional Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Personal Development">Personal Development Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Voluntary">
                Voluntary Work for Non Profits
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lets Connect!" id="connect-nav-dropdown">
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
            <Nav.Link href="#resume"className="resume"><h2>Resume</h2></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;