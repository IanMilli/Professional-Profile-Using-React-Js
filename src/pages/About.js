import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/images/profilepic.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../pages/css/About.css';

function Home() {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);



    return (
        <div className='pageAbout'>
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
                        <div  data-aos="fade-left" data-aos-duration="2900" className="aboutSumText1"><h7>After completing a Front End Web Development Skills Boot Camp, I am now transitioning from my previous role as a Culinary and Hospitality Manager to pursue a career in this field. As a seasoned Chef, I have developed a range of skills that are transferable to web development, such as strong problem-solving abilities, effective teamwork team management skills, and excellent communication skills. Furthermore, I have honed my creativity and attention to detail, as well as my passion for learning new things and my dedication to excellence.</h7></div>
                        
<div data-aos ="fade-right"data-aos-duration="2900"className="aboutSumText2"><h7> In addition, I have acquired technical skills in HTML, CSS, Javascript, React, and other web development areas. To learn more scroll down below.</h7></div>
                        <div class="item" data-aos="fade-left"data-aos-duration="2900"className="aboutSumText3"> <h7> I am confident that my diverse skill set will be well-suited to the fast-paced and constantly evolving nature of the web development industry.</h7>
                        </div>
                       
                </Col>
            </Row>
            <Row>
            <div data-aos="flip-down">
                            
                            <h8 className="technicalText">Technical skills</h8>
                            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                                
                                
                                </div>  
                        
    
                        
            </Row>

        </Container>
        </div >


    );
}

export default Home;