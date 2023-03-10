import Container from 'react-bootstrap/Container';
import React from "react";
import Button from 'react-bootstrap/Button';
import '../pages/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homePic from "../assets/images/homePage.jpg";



function Home() {
  return (
    <div style={{

      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '80vh'
    }}>
      <Container className='Home'>
      <h1>
  <span>always be</span>
  <div class="message">
    <div class="word1">close</div>
    <div class="word2">code</div>
    <div class="word3">creating</div>
  </div>
</h1>
      </Container>
    </div>

  );
}

export default Home;
