import React from "react";
import SoloFlipCard from "../components/SoloCard.jsx";
import homePic from "../assets/images/homePage.jpg";

import advancedRPG from '../assets/images/project screenshots/advancedRPG.png';
import basicRPG from '../assets/images/project screenshots/basicRPG.png';
import dailyPlanner from '../assets/images/project screenshots/dailyPlanner.png';
import readme from '../assets/images/project screenshots/readme.gif';
import revisionCards from '../assets/images/project screenshots/revision cards front page.png';
import weather from '../assets/images/project screenshots/weather homepage - london.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/SoloCard.scss";


const cards = [
  {
    id: "1",
    div:'a',
    variant: "hover",
    name: "Basic Password Generator",
    image:basicRPG,
    subtitle: "",
    description: "This project is to understand the basics of how to create a basic random password generator before expanding to a more advanced version that allows the size of the password to be determined by the user.",
    tech:"HTML, Bootstrap 4.31, CSS, Flexbox, Node Js (creation of readme), JavaScript",
    repo: "https://github.com/LauraCole1900/bcms",
    deployed: "https://ianmilli.github.io/Basic-Random-Password-Generator-Web-Application/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "2",
    div:'b',
    variant: "hover",
    name: "Advanced Password Generator",
    image: advancedRPG,
    subtitle: "",
    description: "A project to create of a advanced random password generator that will allow a user to define a password of between 10 and 64 characters containing should the user select the lowercase letters, uppercase letters, special symbols and numbers.",
    tech: " HTML, CSS, FlexBox, JavaScript, Node JS (Readme Generator) , ES6",
    repo: "https://github.com/IanMilli/Advanced-Random-Password-Generator--Web-Application",
    deployed: "https://ianmilli.github.io/Advanced-Random-Password-Generator--Web-Application/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "3",
    div:'c',
    variant: "hover",
    name: "Daily Work Planner",
    image: dailyPlanner,
    subtitle: "",
    description: "The project is a work schedule planning app that allows users to enter their daily tasks and save them.",
    tech: " Jquery, HTML, CSS, Bootstrap, Javascript, Moments library, Node JS (Readme Generator) , ES6,",
    repo: "https://github.com/IanMilli/Daily-Work-Schedule",
    deployed: "https://ianmilli.github.io/Advanced-Random-Password-Generator--Web-Application/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "4",
    variant: "hover",
    name: "Responsive Weather Dashboard with API",
    image: "",
    subtitle: weather,
    description: "This project is to develop and produce a weather dashboard to provide weather data for any requested city the user searches for and to give the option for the user to see the next five days of weather for said location.",
    tech: " Jquery, HTML, CSS, Bootstrap, Javascript, Moments library, Node JS (Readme Generator) , ES6, API, AJAX",
    repo: "https://github.com/IanMilli/Global-City-Weather-Dashboard-",
    deployed: "https://ianmilli.github.io/Global-City-Weather-Dashboard-/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "5",
    variant: "hover",
    name: "Revision Card Test Application",
    image: revisionCards,
    subtitle: "",
    description: "This project is to develop revision test application to aid in the learning of basic coding concepts",
    tech: " HTML5, CSS3, JavaScript, Bootstrap, FlexBox",
    repo: "https://github.com/IanMilli/Revision-Cards-Web-Application",
    deployed: "https://ianmilli.github.io/Revision-Cards-Web-Application/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "6",
    variant: "hover",
    name: "Node Js ReadME Generator",
    image: readme,
    subtitle: "",
    description: " This is a application that creates a professional readme file using input by a user prompted through a set of questions. The ReadME.MD File it can generate will be suitable for use with any professional project.",
    tech: " ES6, Node JS",
    repo: "https://github.com/IanMilli/Professional-ReadMe-Creator",
    deployed: "",
    deploy_button_label: "Please Visit the Repository"
  },

  {
  id: "7",
    variant: "hover",
    name: "Professional Profile version 1.5",
    image: "",
    subtitle: "",
    description: "  This is an early development of my current Professional Profile to demonstrate my development in skills in Front End Web Development",
    repo: "https://github.com/IanMilli/Professional-Profile-",
    deployed: "https://ianmilli.github.io/Professional-Profile-/",
    deploy_button_label: "Deployed Application"
  },
 
];


function Solo() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '180vh'
    }}>

      <h3>To Review Web Development Projects I have been involved select from the following</h3>
      

      <div className="container">
        <div className="row h-100">
          <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            {cards.map((card) => (
              <SoloFlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      </div>)

}




      export default Solo;