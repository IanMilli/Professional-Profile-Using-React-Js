import React from "react";
import {Link, } from "react-router-dom";

function Projects() {
  return (
    <div style={{
      backgroundImage: `url("../images/homeBackground.jpg")`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '120vh'
  }}>

<h3>To Review Web Development Projects I have been involved select from the following</h3>
    Link 

    <Link to="/Personal" className="personal"><h2>Personal</h2></Link>
    </div>)

}




export default Projects;