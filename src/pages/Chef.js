import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import grovePic from '../assets/images/culinary skills/chef.jpg'
import judges from '../assets/images/about - workCarousel/judges-lodgings.svg';
import abbyHouse from '../assets/images/about - workCarousel/abbyHouse.png';
import bbPic from '../assets/images/about - workCarousel/bb.jpg'
import btPic from '../assets/images/about - workCarousel/BlackpoolTower.png'
import fhPic from '../assets/images/about - workCarousel/frimleyHall.jpg'
import tgPic from '../assets/images/about - workCarousel/grove.png'
import bhPic from '../assets/images/about - workCarousel/hiltonBlackpool.jpg'
import yhPic from '../assets/images/about - workCarousel/hiltonYork.jpg'
import lfPic from '../assets/images/about - workCarousel/lochFyne.jpg'
import myPic from '../assets/images/about - workCarousel/marriottYork.jpg'
import rhPic from '../assets/images/about - workCarousel/royalHousehold.png'
import sbPic from '../assets/images/about - workCarousel/Seabourn.jpg'
import '../pages/css/Chef.css';




function Chef() {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);

    return (
        <div className='pageAbout' style={{


            width: 'auto',
            height: '170vh'
        }}>
            <Container>
                <Row>
                    <div data-aos="flip-left" data-aos-duration="2900" className="quoteDiv">


                        <h3 style={{ marginTop: '3vh' }}> "Creativity is seeing what others see and thinking what no one else has ever thought." </h3>
                        <h3 > - Albert Einstein. </h3>

                    </div>


                </Row>
                <Row>



                    <img src={grovePic} alt="myself in the Grove Hotel" id="grovePic" />

                    <h7 className="caption">Advertising Picture For The GlassHouse Restaurant at the Grove Hotel, myself in the center</h7>


                </Row>
                <Row>

                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <h10 className="summary">As a culinary expert, my passion has always revolved around the creative aspect of cooking, and I take great delight in crafting tasty dishes that tantalize the taste buds. Over time, I have acquired extensive knowledge of cooking techniques and come to appreciate the nuanced flavors offered by different ingredients. My love for the culinary arts started with learning the rudiments of cooking, which has now evolved into an unwavering passion for creating culinary masterpieces that leave lasting impressions on diners."</h10>
                    </div>
                </Row>

                <Row>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" style={{ marginTop: '5vh' }}>
                        In my career I have been very fortunate to have been able to explore and develop my creativity in a number of high quality establishments such as the following:
                    </div>
                   
                </Row>
                <div data-aos="zoom-in-up"  data-aos-duration="2000">
                <h8 className="techText" id="employmentSkills">Employment History</h8>
                <Carousel  >
                    <Carousel.Item >
                        <Row>
                            <Col xs={1}></Col>
                            <Col>
                                <img
                                    src={btPic}
                                    alt="Blackpool Tower"
                                    className='employmentPic'

                                />
                                <div className="employmentText">
                                    <h9>Blackpool Tower</h9>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    src={bhPic}
                                    alt="Blackpool Hilton"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>Blackpool Hilton</h9>
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={yhPic}
                                    alt="York Hilton"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>York Hilton</h9>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                            <Col xs={1}></Col>
                            <Col>
                                <img
                                    src={myPic}
                                    alt="Marriott York"
                                    className='employmentPic'

                                />
                                <div className="employmentText">
                                    <h9>Marriott York</h9>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    src={lfPic}
                                    alt="Loch Fyne York"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>Loch Fyne York</h9>
                                </div>

                            </Col>
                            <Col>
                                <img
                                    src={tgPic}
                                    alt="The Grove Hotel"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>The Grove Hotel</h9>
                                </div>
                            </Col>




                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={1}></Col>

                            <Col>
                                <img
                                    src={sbPic}
                                    alt="Seabourne Cruise Line"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>Seabourne Cruise Line</h9>
                                </div>

                            </Col>
                            <Col>
                                <img
                                    src={rhPic}
                                    alt="The Royal Household"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>The Royal Household QEII </h9>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    src={fhPic}
                                    alt="Frimley Hall"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>Frimley Hall Hotel </h9>
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                            <Col xs={1}></Col>
                            <Col>
                                <img
                                    src={bbPic}
                                    alt="Boys Brigade"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>The Boys' Brigade </h9>
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={judges}
                                    alt="Judges Lodgings York"
                                    className='employmentPic'
                                    style={{ backgroundColor: 'navy' }}
                                />
                                <div className="employmentText">
                                    <h9>Judges Lodgings York</h9>
                                </div>

                            </Col>
                            <Col>
                                <img
                                    src={abbyHouse}
                                    alt="Abby House Hotel"
                                    className='employmentPic'
                                />
                                <div className="employmentText">
                                    <h9>The Abby House Hotel</h9>
                                </div>
                            </Col>




                        </Row>

                    </Carousel.Item>
                </Carousel>
        </div>
            </Container >
        </div >


    );
}

export default Chef;