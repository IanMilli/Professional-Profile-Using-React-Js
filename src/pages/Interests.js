import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect,  } from "react";
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
                <div >
        <TypeAnimation 
          sequence={[
                            'My diverse intereasts in ..'
                            ,
                            3000,
                            'My diverse intereasts in ..Archery,',
                            3000,
                            'My diverse intereasts in ..Gaming,',
                            3000,
                            'My diverse intereasts in ..Reading,',
                            3000,
                            'My diverse intereasts in ..Writing,',
                            3000,
                            'My diverse intereasts in ..Volunteering,',
                            3000,
                            () => {

                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    />
                </div>


                <h9>My diverse interests in:  ● Archery, ●Writing, ●Gaming, and ●Reading provide creative outlets for me outside of work and have contributed significantly to my personal development. I have also gained valuable experience through my voluntary work. </h9>

                <div>
                    <img src={archery} alt="GB archery" style={{ backgroundColor: 'Maroon' }} />
                    <div>Archery has been a significant contributor to my personal development, teaching me discipline, patience, and focus that have positively impacted various aspects of my life. I have learned to set and achieve challenging goals, and develop resilience in stressful situations, while also experiencing a sense of pride and accomplishment through improving my accuracy and technique. Overall, archery has transformed me by instilling valuable skills and qualities that have positively impacted my personal and professional growth. Equally becoming an Archery GB instructor is a fulfilling and rewarding experience. </div>
                    <div> That has allowed me to share my passion for archery with others and introduce them to this ancient and exciting sport.</div>
                </div>
            </div>
            <div>
                I
                Partnership with Lancashire Constabulary
                August 2021 - Present Day
                ● Volunteer Operation Nemo –
                Lytham St Annes August 2021 -
                September 2021
                ● ESport - Global and Regional

                Tournament Administrator - ROTW-
                WOWSB May 2021 - October 2022

                ● ESport - Regional Tournament Creator
                and Administrator - SOVS- WOWSB
                ● UK Royal Voluntary
            </div>

















        </ div>


    );
}

export default Interests;