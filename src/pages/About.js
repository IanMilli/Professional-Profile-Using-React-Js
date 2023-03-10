import Container from 'react-bootstrap/Container';
import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import '../pages/About.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { NavItem } from 'react-bootstrap';


function Home() {
    return (
        <div style={{
            backgroundImage: `url("../images/homeBackground.jpg")`,

            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 'auto',
            height: '120vh'
        }}>
            <Container >
                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col xs={9}> <h3 className="text-center homeText" >
                        I Am a Chef and Hospitality Manager transitioning into a
                        Junior Development role after completing a Certificated Course in Front-End
                        Web Development.</h3>

                        <h3 > I have Front End Web Development Skills and Experience working with multiple technologies such as :
                        </h3>
                        <Carousel variant='dark' style={{

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
            <h3>having worked at multiple high quality environments such as:</h3>
            <Carousel variant='dark' style={{

                height: '30vh'
            }}>
                <Carousel.Item>
                    <Row>
                        <Col></Col>
                        <Col>
                            <img src='..\images\about - workCarousel\BlackpoolTower.png' alt="Blackpool Tower" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\hiltonBlackpool.jpg' alt="Blackpool Hilton" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\hiltonYork.jpg' alt="York Hilton " id="workPic"></img>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col></Col>
                        <Col>
                            <img src='..\images\about - workCarousel\marriottYork.jpg' alt="Mariott York" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\lochFyne.jpg' alt="Loch Fyne" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\grove.png' alt="Grove " id="workPic"></img>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col></Col>
                        <Col>
                            <img src='..\images\about - workCarousel\Seabourn.jpg' alt="Seabourne" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\royalHousehold.png' alt="The Royal Household" id="workPic"></img>
                        </Col>
                        <Col>
                            <img src='..\images\about - workCarousel\bb.jpg' alt="Boys Brigade " id="workPic"></img>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            <h3>I am ready to express my creativity through web development. </h3>
            <h3>for information on some of the Web Design Work I Have Completed Please Click on <LinkContainer to="/Projects">
                <NavItem eventKey={1}>Projects</NavItem>
            </LinkContainer> </h3>
        </div>

        

    );
}

export default Home;