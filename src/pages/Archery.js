import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../pages/css/Chef.css';



function Archery() {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);
 
    

        return (
            <div className='pageAbout'style={{

               
                width: 'auto',
                height: '140vh'}}>
           
            </div >


        );
    }

    export default Archery;