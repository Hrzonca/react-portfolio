import React from "react";
import project from "../project.json";
import ProjectCards from "./Project";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
    return (
        <div>
            <div className="project">
            <h1>Projects</h1>
            </div>
        
            <Wrapper id="card-data">
            {project.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
            ))}
          </Wrapper>
        </div>
    )
}

export default Portfolio;