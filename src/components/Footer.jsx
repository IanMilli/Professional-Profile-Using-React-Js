import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/Footer.css';


function Footer() {
    return (
        <Navbar expand="lg" className='footer'>

           

            <Container>
                <Nav>

                </Nav>
                <Nav className="footer">
                    <div className='copyright'>
                    <a className="text-white "href="/Home">
                        © 2023
                        Copyright:    
                           Ian
                        Millichamp
                        
                    </a>
                    </div>
                    <Nav.Link className="text-info logo1" href="/Contact" id="phone"><h3><i class="fa fa-address-card"></i></h3></Nav.Link>
                <Nav.Link className="text-info logo1" href="tel:+4407498174271" id="phone"><h3><i className="fa fa-phone"></i></h3></Nav.Link>
                <Nav.Link className="text-info logo1" href="mailto:ianmillichamp.2@gmail.com"id="email"><h3><i className="fa fa-envelope"></i></h3></Nav.Link>
                <Nav.Link className="text-info logo1" href="https://www.linkedin.com/in/ian-millichamp/"id="linkedin">
                    <h3> <i className="fa fa-linkedin "></i></h3></Nav.Link>
                <Nav.Link className="text-info logo1" href="https://github.com/IanMilli"id="github"><h3> <i className="fa fa-github"></i></h3></Nav.Link>
            </Nav>
        </Container>
        </Navbar >
    );
}



export default Footer;

