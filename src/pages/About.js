import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import profilePic from '../assets/images/profilepic.jpg';
import html from '../assets/images/technical skills carousel/html-logo.png';
import css from '../assets/images/technical skills carousel/css-logo.png';
import bootstrap from '../assets/images/technical skills carousel/bootstrap-framework-logo.png';
import react from '../assets/images/technical skills carousel/react.png';
import javaScript from '../assets/images/technical skills carousel/javascript-logo.png';
import git from '../assets/images/technical skills carousel/git.png';
import gitHub from '../assets/images/technical skills carousel/github.png';
import ui from '../assets/images/technical skills carousel/ui-ux-design.png';
import es6 from '../assets/images/technical skills carousel/es6.png';
import bdd from '../assets/images/technical skills carousel/bdd.png';
import ajax from '../assets/images/technical skills carousel/ajax.png';
import api from '../assets/images/technical skills carousel/api.png';
import deployment from '../assets/images/technical skills carousel/deployment.png';
import dom from '../assets/images/technical skills carousel/dom.png';
import jquery from '../assets/images/technical skills carousel/jquery.png';
import json from '../assets/images/technical skills carousel/json.png';
import nodejs from '../assets/images/technical skills carousel/nodejs.png';
import oop from '../assets/images/technical skills carousel/oop.png';
import tdd from '../assets/images/technical skills carousel/tdd.png';
import ruby from '../assets/images/technical skills carousel/ruby.png';
import '../pages/css/About.css';



function About() {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);



    return (
        <div className='pageAbout' style={{


            width: 'auto',
            height: '140vh'
        }}>
            <Container >
                <Row >
                    <Col xs={2}></Col>
                    <Col xs={2} className="profilePicCol">
                        <img src={profilePic} alt="Profile Pic" className="profilePic" />
                    </Col>
                    <Col xs={8} className="aboutMeTitleText">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"><h6>Ian Millichamp</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h6>Summary:</h6>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <div data-aos="fade-left" data-aos-duration="2900" className="aboutSumText1"><h7>Having Recently completed a Front-End Web Development Skills Boot Camp, I am now
                            transitioning from a Culinary and Hospitality Manager role to pursue a career in this field.</h7></div>

                        <div data-aos="fade-right" data-aos-duration="2900" className="aboutSumText2"><h7> I possess transferable skills such as problem-solving, effective teamwork, team
                            management, communication, creativity and attention to detail from being as seasoned
                            chef. Proficient in HTML, CSS, JavaScript, React and other web development technologies
                            and with a strong passion for learning and dedication to excellence. To learn more scroll down below.</h7></div>
                        <div class="item" data-aos="fade-left" data-aos-duration="2900" className="aboutSumText3"> <h7> I am excited to
                            leverage my diverse skill set in the fast paced and ever-changing environment of the web
                            development industry.</h7>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <div data-aos="flip-down">

                        <h8 className="techText" id="technicalSkills">Technical skills</h8>
                        <Carousel  >
                            <Carousel.Item >
                                <Row>
                                    <Col xs={1}></Col>
                                    <Col>
                                        <img
                                            src={html}
                                            alt="HTML"
                                            className='technicalLogoPic'

                                        />
                                        <div className="technicalText">
                                            <h9>HTML</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={css}
                                            alt="CSS"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>CSS</h9>
                                        </div>
                                    </Col>

                                    <Col>
                                        <img
                                            src={react}
                                            alt="React"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>React</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={bootstrap}
                                            alt="Bootstrap"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Bootstrap</h9>
                                        </div>
                                    </Col>

                                </Row>
                            </Carousel.Item>
                            <Carousel.Item >
                                <Row>
                                    <Col xs={1}></Col>
                                    <Col>
                                        <img
                                            src={git}
                                            alt="Git"
                                            className='technicalLogoPic'

                                        />
                                        <div className="technicalText">
                                            <h9>GIT</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={gitHub}
                                            alt="gitHub"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Git Hub</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={ui}
                                            alt="User Experience Design"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>User Experience Design</h9>
                                        </div>

                                    </Col>
                                    <Col>
                                        <img
                                            src={javaScript}
                                            alt="JavaScriptL"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>JavaScript</h9>
                                        </div>

                                    </Col>


                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col xs={1}></Col>

                                    <Col>
                                        <img
                                            src={bdd}
                                            alt="Behavior Driven Development"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Behavior Driven Development </h9>
                                        </div>


                                    </Col>
                                    <Col>
                                        <img
                                            src={es6}
                                            alt="ES6"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>ES6 </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={jquery}
                                            alt="JQuery"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>JQuery </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={json}
                                            alt="JSON"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>JSON </h9>
                                        </div>
                                    </Col>

                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col xs={1}></Col>

                                    <Col>
                                        <img
                                            src={ajax}
                                            alt="AJAX"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>AJAX </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={api}
                                            alt="API"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>API</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={dom}
                                            alt="The Dom"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>The DOM</h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={oop}
                                            alt="Object Oriented Programming"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Object Oriented Programming </h9>
                                        </div>
                                    </Col>

                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col xs={1}></Col>

                                    <Col>
                                        <img
                                            src={ruby}
                                            alt="Ruby"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Ruby </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={nodejs}
                                            alt="Node JS"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Node JS </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={tdd}
                                            alt="Test Driven Development"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Test Driven Development </h9>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img
                                            src={deployment}
                                            alt="Deployment"
                                            className='technicalLogoPic'
                                        />
                                        <div className="technicalText">
                                            <h9>Deployment</h9>
                                        </div>
                                    </Col>

                                </Row>
                            </Carousel.Item>
                        </Carousel>


                    </div>



                </Row>

            </Container>
        </div >


    );
}

export default About;