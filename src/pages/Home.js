import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <div style={{ 
      backgroundImage: `url("../images/homeBackground.jpg")` ,
      
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  width:'auto' ,
  height:'auto'
    }}>
    <Container >
     <Row style={({height:'5vh'})}>
      </Row>
      <Row>
        <Col xs={1}>
        </Col>
        <Col xs={2}> 
    <img src='../images/profilepic.jpg'alt="profilepic" id="profilepic"></img>
  </Col>
        <Col xs={9}> <h3>
    Welcome, I am Ian Millichamp ,</h3>
      <h3> A Creative Individual Who Uses Cooking & Web Design As My Creative Outlets.
    
    </h3>
    <h3> Learn More Click Below:
    </h3>
  </Col>
      </Row>
      <Row>
        <Col><div className="quote">
    something something something, sean havens
  </div></Col>
      </Row>
</Container>
</div>

  );
}

export default Home;