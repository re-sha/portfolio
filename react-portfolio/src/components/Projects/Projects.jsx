import React from "react";
import projects from "../../data/projects.json";
import { getImageFromUrl } from "../../utils";

export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project, id) => {
                return (
                    <div key = {id}>
                        <img 
                            src = {getImageFromUrl(project.imageSrc)}
                            alt= {`Image of ${project.title}`}
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <uL>
                            {project.skills.map((skill, id) =>{
                                <li key={id}>{skill}</li>;
                            })}
                        </uL>
                        <div>
                            <a href={project.demo}>Demo</a>
                            <a href={project.source}>Source</a>
                        </div>
                    </div>           
                );
            })}
        </div>    
    </section>
  );
};