import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <div style={{
      backgroundImage: `url("../images/homeBackground.jpg")`,

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
            <img src='../images/profilepic.jpg' alt="profilepic" id="profilepic"></img>
          </Col>
          <Col xs={9}> <h3>
            Welcome, I am Ian Millichamp ,</h3>
            <h3> A Creative Individual Who Uses Cooking & Web Design As My Creative Outlets.

            </h3>
            <h3> To Learn More About Me Click Below:
            </h3>
            <Button variant="info" size="lg" href="/About">About</Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          </Col>
          <Col xs={8}>
            <h4>"Creativity is the ability to have a Wonderful Imagination Capable Of Envisioning The World In A Unique Way" - Sean Havens</h4>
            <h5> "Creativity is seeing what others see and thinking what no one else has ever thought." - Albert Einstein. "</h5>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Home;