import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, } from "react";
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import archery from '../assets/images/intereasts/archery-gb-logo-white-chopped.svg';
import archeryBG from '../assets/images/intereasts/archeryBackground.png';
import '../pages/css/Interests.css';



function Interests() {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);



    return (
        <div>
            <div style={{

                backgroundImage: `url(${archeryBG})`,

                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: 'auto',
                height: '140vh'
            }}>
                <div data-aos="fade-right" data-aos-duration="2000" >
                    <Row>
                        <TypeAnimation className="archeryAnimationText"
                            sequence={[
                                'My diverse interests in ..'
                                ,
                                3000,
                                'My diverse interests in ..Archery..',
                                3000,
                                'My diverse interests in ..Gaming..',
                                3000,
                                'My diverse interests in ..Reading..',
                                3000,
                                'My diverse interests in ..Writing..',
                                3000,
                                'My diverse interests in ..Film..',
                                3000,
                                'My diverse interests in ..Volunteering..',
                                3000,
                                () => {

                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                        />

                    </Row>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className="text2">..provide creative outlets for me outside of work and have contributed significantly to my personal development. I have also gained valuable experience through my voluntary work. </div>

                <div>

                    <div data-aos="fade-right" data-aos-duration="2000" className="text3">Archery has taught me discipline, patience, and focus, improving my accuracy and technique. It has instilled valuable skills and qualities including teamwork and leadership that has positively impacted my personal and professional growth. Becoming an <img src={archery} alt="GB archery" style={{ backgroundColor: 'Maroon' }} id="gbArcheryPic" /> instructor is fulfilling, allowing me to share my passion and introduce others to this exciting and ancient sport.</div>

                </div>

                <div data-aos="zoom-in" data-aos-duration="2900" className="text4">
                    As a professional, I value the importance of giving back to my community and making a positive impact on the world around me. I believe that volunteering is a powerful tool for personal and professional development, and I have actively sought out opportunities to get involved in various organizations and programs. Through volunteering, I have gained valuable skills and experiences and demonstrated my commitment to causes that align with my values. I am passionate about making a difference in the world, and I believe that volunteering is a crucial aspect of achieving that goal.
                </div>


            </div>



















        </ div >


    );
}

export default Interests;