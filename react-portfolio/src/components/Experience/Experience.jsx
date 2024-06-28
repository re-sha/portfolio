import React from 'react';

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import histories from "../../data/history.json";
import {getImageFromUrl} from "../../utils"

export const Experience = () => {
  return (
  <section id = "experience">
    <h2>Experience</h2>
    <div>
        <div>{
            skills.map((skill, id) => {
                return (
                    <div key={id}>
                        <div>
                            <img 
                             src = {getImageFromUrl(skill.imageSrc)} 
                             alt = {skill.title} 
                            />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                );
            })
        }</div>
        <ul>
           { histories.map((history, id) => {
                return (
                    <li key = {id}>
                        <img 
                         src={getImageFromUrl(history.imageSrc)} 
                         alt={`${history.organisation} Logo`} 
                        />
                        <div>
                            <h3>{`${history.role}, ${history.organisation}`}</h3>
                            <p>{`${history.startDate} - ${history.endDate}`}</p>
                            <li>
                                {
                                    history.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })
                                }
                            </li>
                        </div>    
                    </li>
                )
            })}
        </ul>
    </div>
  </section>
  );
};
