import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <Container className="body">
     <Row>
        <Col> <div className="Profile-pic">
    <img src='../images/profilepic.jpg'alt="profilepic" id="profilepic"></img>
  </div></Col>
        <Col> <div className="Text-about">
    Welcome, To Learn More about Me, Ian Millichamp , a Front End Web Developer, Chef and Hospitality Manager Please Click the following link:
  </div></Col>
      </Row>
      <Row>
        <Col><div className="quote">
    something something something, sean havens
  </div></Col>
      </Row>
</Container>

  );
}

export default Home;