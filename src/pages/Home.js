import Row from 'react-bootstrap/Container';
import React from "react";
import '../pages/Home.css';
import { TypeAnimation } from 'react-type-animation';
import homePic from "../assets/images/homePage.jpg";



function Home() {
  return (
    <div style={{

      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '100vh'
    }}>
      <Row>
       <h4 className="text">Ian Millichamp</h4>
    <div className='animationBox'>
        <TypeAnimation className="animationText"
          sequence={[
            'Front End Web Developer'
            , 
            5000, 
            'Chef, Hospitality Manager', 
            5000, 
            'Archery Instructor',
            5000, 
            () => {
             
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
       </div> 
       </Row>
    </div>
    
  );
}

export default Home;
