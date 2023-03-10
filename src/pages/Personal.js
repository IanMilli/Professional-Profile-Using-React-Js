import React from "react";
import FlipCard from "../components/projectCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/projectCard.scss";


const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Solo Authored Web Development Projects",
    front: "",
    back: "Click the link below to learn more about Web Applications I have Created Myself",
    address: "/Projects/Personal/Solo",
    linkTitle: "Solo Authored Projects"
  },
  {
    id: "2",
    variant: "hover",
    title: "Professional Web Development Work",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created In Collaboration With Others",
    address: "/Projects/Personal/Collaboration",
    linkTitle: "Collaborated on Projects"
  },
 
];


function Personal() {
  return (
    <div style={{
      backgroundImage: `url("../images/homeBackground.jpg")`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '120vh'
    }}>

      <h3>To Review Web Development Projects I have been involved select from the following</h3>
      

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