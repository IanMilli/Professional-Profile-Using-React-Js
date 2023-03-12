import Container from 'react-bootstrap/Container';
import React from "react";
import 'animate.css';
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
                        <img src={profilePic} alt="Profile Pic" className="profilePic" />
                    </Col>
                    <Col xs={8}>
                        <AnimationOnScroll animateIn="animate__backInDown">
                            <h4>Some Text</h4>
                        </AnimationOnScroll>
                    </Col>
                </Row>

            </Container>


        </div>
    );
}

export default Home;