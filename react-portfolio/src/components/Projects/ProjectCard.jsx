import React from "react";
import { getImageFromUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project : {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
        <img 
         src = {getImageFromUrl(imageSrc)}
         alt= {`Image of ${title}`} className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <uL className={styles.skills}>
         {skills.map((skill, id) =>{
             return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
             );
         })}
        </uL>
        <div className={styles.links}>
            <a href={demo} className={styles.link}>Demo</a>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>         
  );
};

//destructuring with es6