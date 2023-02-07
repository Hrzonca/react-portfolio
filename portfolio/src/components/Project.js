import React from "react";

function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.github}><img src="" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><img src="" alt="Deployed Site" id="project-icon"/></a> 
              </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;