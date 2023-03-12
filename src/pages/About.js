import Container from 'react-bootstrap/Container';
import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import profilePic from '../assets/images/profilepic.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../pages/css/About.css';


function Home() {
    return (
        <div className="pageAbout">
            <Container >
                <Row>
                    <Col xs={2}>
                    <img src={profilePic} alt="Profile Pic" className="profilePic"/>
                    </Col>
                    <Col xs={8}>
                    <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
  <h1>
    React Animate On Scroll
  </h1>
  <h2>
    Using:
  </h2>
</ScrollAnimation>
                    </Col>
                </Row>
               
       </Container>

        
       </div>
    );
}

export default Home;