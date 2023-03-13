import React from "react";
import FlipCard from "../components/PersonalCards.jsx";
import homePic from "../assets/images/homePage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/ProjectCard.scss";


const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Solo Authored Web Skill Development Projects",
    front: "",
    back: "Click the link below to learn more about Web Applications I have Created Myself",
    address: "/Projects/Personal/Solo",
    linkTitle: "Solo Authored Projects"
  },
  {
    id: "2",
    variant: "hover",
    title: "Collaborated Web Skill Development Projects",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created In Collaboration With Others",
    address: "/Projects/Personal/Collaboration",
    linkTitle: "Collaborated on Projects"
  },

];


function Personal() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '140vh'
    }}>
     
        <div className="textProjectsHeader">To Review the Web Design Projects I have completed in the development of my technical skills </div>
        <div className="textProjectsHeader"> select from the following: </div>


        <div className="container">
          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
     
    </div>)

}




export default Personal;