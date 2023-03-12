import Container from 'react-bootstrap/Container';
import React from "react";
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

                    </Col>
                </Row>
               
       </Container>

        
       </div>
    );
}

export default Home;