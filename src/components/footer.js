import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/footer.css';

function Footer() {
    return (
        <Navbar expand="lg" className='footer'>
            <img src='../images/logoFoot.png' href="#home"id="logoNav" alt='logo Img'></img>
            <Container>
                <Nav>

                </Nav>
                <Nav >
                    <div className='copyright'>
                    <a className="text-white">
                        © 2023
                        Copyright:    </a>
                    <a className="text-white"
                        href="/Home">   Ian
                        Millichamp
                    </a>
                    </div>
                <Nav.Link className="text-info" href="tel:+4407498174271" id="phone"><h2><i className="fa fa-phone"></i></h2></Nav.Link>
                <Nav.Link className="text-info" href="mailto:ianmillichamp.2@gmail.com"id="email"><h2><i className="fa fa-envelope"></i></h2></Nav.Link>
                <Nav.Link className="text-info" href="https://www.linkedin.com/in/ian-millichamp/"id="linkedin">
                    <h2> <i className="fa fa-linkedin"></i></h2></Nav.Link>
                <Nav.Link className="text-info" href="https://github.com/IanMilli"id="github"><h2> <i className="fa fa-github"></i></h2></Nav.Link>
            </Nav>
        </Container>
        </Navbar >
    );
}

export default Footer;

