import React from "react";

function ProjectCards(project) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={project.name} src={project.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{project.name}</p>
              
              <p>
              <a href={project.github}><img src={project.github} alt={project.name}/></a> 
              <a href={project.deploy}><img src={project.deploy} alt={project.name}></img></a> 
              </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;