import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from "../assets/images/profilepic.jpg";



function Home() {
  return (
    <div style={{

      backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-envag&psig=AOvVaw1Ye8dbUfkjUIEDmgaEX-eC&ust=1678357226762000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCB9quOzP0CFQAAAAAdAAAAABAE)`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '80vh'
    }}>
      <Container >
        <Row style={({ height: '5vh' })}>
        </Row>
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={2}>

            <img src={profilePic} alt="profilepic" id="profilepic"></img>

          </Col>
          <Col xs={9}> <h3 className="text-center homeText" >
            Welcome, I am Ian Millichamp,</h3>
            <h3 className="homeText"> A Creative Individual Who Uses Cooking & Web Design As My Creative Outlets.

            </h3>
            <h3 className="text-center homeText"> To Learn More About Me Click Below:
            </h3>
            <Button variant="info" size="lg" href="/About" id="but">About</Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          </Col>
          <Col xs={8}>
            <h4 className="text-center">"Creativity is the ability to have a Wonderful Imagination </h4>
            <h4 className="text-center">Capable Of Envisioning The World In A Unique Way"</h4>
            <h4 className="text-center homeText">- Sean Havens</h4>
            <h5 className="text-center"> "It is seeing what others see and thinking what no one else has ever thought." </h5>
            <h5 className="text-center"> - Albert Einstein. "</h5>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Home;
