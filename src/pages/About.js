import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/About.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';


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
                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col xs={9}> <h3 className="text-center homeText" >
                        Former Culinary and Hospitality Manager transitioning into a
                        Junior Development role after completing a Certificated Course in Front-End
                        Web Development.</h3>

                        <h3 > My Skills include working with multiple technologies such as :
                        </h3>
                        <Carousel style={{
            
            height: '20vh'
        }}>
                            <Carousel.Item>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>HTML</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>CSS</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>GIT</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>React</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>User Experience Design</h6>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>AJAX</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>Bootstrap</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>JavaScript</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>ES6</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>Behavior Driven Development</h6>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>The Dom</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>Node Js</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>ApI's</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>J Query</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>JSON</h6>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>Object Oriented Programming</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="info"></Spinner> <h6>Test Driven Development</h6>
                                    </Col>
                                    <Col>
                                        <Spinner animation="border" variant="primary"></Spinner> <h6>Deployment</h6>
                                    </Col>
                                 
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Home;