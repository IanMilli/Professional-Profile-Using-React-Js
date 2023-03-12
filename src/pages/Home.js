
import React from "react";
import '../pages/css/Home.css';
import { TypeAnimation } from 'react-type-animation';
import { Link, } from "react-router-dom";
import homePic from "../assets/images/homePage.jpg";



function Home() {
  return (
    <div style={{

      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '140vh'
    }}>
    
       <h4 className="text">Ian Millichamp</h4>
    <div className='animationBox'>
        <TypeAnimation className="animationText"
          sequence={[
            'Front End Web Developer'
            , 
            3000, 
            'Chef,', 
            3000, 
            'Culinary Manager,', 
            3000, 
            'Archery Instructor',
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
   
       <Link style={{ color: '#2f3061' }} to="/About" className="aboutLink "><h5>Click To Learn More About Me</h5></Link>
    </div>
    
  );
}

export default Home;
