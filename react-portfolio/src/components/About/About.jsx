import React from 'react';
import styles from "../About/About.module.css";
import { getImageFromUrl } from "../../utils";

export const About = () => {
  return (
    <section>
      <h2>ABOUT</h2>
      <div>
        <img 
          src = {getImageFromUrl("about/aboutImage.png")} 
          alt = "Image of software developer with a laptop"
        />
        <ul>
          <li>
            <img 
              src = {getImageFromUrl("about/serverIcon.png")}
              alt = "server Icon"
            />
            <h3>Microservices</h3>
            <p> I have extensive experience in developing and maintaining multiple microservices using Spring Boot and Java. I have created RESTful endpoints, collaborated with teams to design and implement features, and utilized debugging tools to identify and fix errors, troubleshoot issues, and ensure timely resolution</p>
          </li>

          <li>
            <img 
              src = {getImageFromUrl("about/cursorIcon.png")}
              alt = "cursor Icon"
            />
            <h3>Frontend Developer</h3>
            <p>I'm also a front-end developer with experience in building responsive and optimised websites</p>
          </li>

          <li>
            <img 
              src = {getImageFromUrl("about/serverIcon.png")}
              alt = "server Icon"
            />
            <h3>Backend Developer</h3>
            <p> I have experience developing APIs and back-end systems </p>
          </li>
            
        </ul>
      </div>
    </section>
  );
};
