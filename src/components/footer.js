import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/footer.css';

function Footer() {
    return (
        <Navbar expand="lg" className='footer'>
            <img src='../images/logoFoot.png' href="#home"id="logoFoot" alt='logo Img'></img>
            <Container>
                <Nav>

                </Nav>
                <Nav className="footer">
                    <div className='copyright'>
                    <a className="text-white"href="/Home">
                        © 2023
                        Copyright:    
                           Ian
                        Millichamp
                        
                    </a>
                    </div>
                <Nav.Link className="text-info logo1" href="tel:+4407498174271" id="phone"><h2><i className="fa fa-phone"></i></h2></Nav.Link>
                <Nav.Link className="text-info logo1" href="mailto:ianmillichamp.2@gmail.com"id="email"><h2><i className="fa fa-envelope"></i></h2></Nav.Link>
                <Nav.Link className="text-info logo1" href="https://www.linkedin.com/in/ian-millichamp/"id="linkedin">
                    <h2> <i className="fa fa-linkedin "></i></h2></Nav.Link>
                <Nav.Link className="text-info logo1" href="https://github.com/IanMilli"id="github"><h2> <i className="fa fa-github"></i></h2></Nav.Link>
            </Nav>
        </Container>
        </Navbar >
    );
}



export default Footer;

