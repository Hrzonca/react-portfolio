import React from "react";

function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="props-title" id="card-title">{props.name}</p>
              
              <p>
              <a href={props.github}><img src={props.github} alt={props.name}/></a> 
              <a href={props.deploy}><img src={props.deploy} alt='deployed app'></img></a> 
              </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;