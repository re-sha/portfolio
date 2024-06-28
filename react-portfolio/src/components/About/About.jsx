import React from 'react';
import styles from "../About/About.module.css";
import { getImageFromUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id = "about"> 
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
          src = {getImageFromUrl("about/aboutImage.png")} 
          alt = "Image of software developer with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src = {getImageFromUrl("about/serverIcon.png")}
              alt = "server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Microservices</h3>
              <p> I have developed microservices using Spring Boot and Java, have created RESTful endpoints and utilized debugging tools to identify and fix errors</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src = {getImageFromUrl("about/cursorIcon.png")}
              alt = "cursor Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm also a front-end developer with experience in building responsive and optimised websites</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src = {getImageFromUrl("about/serverIcon.png")}
              alt = "server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p> I have experience developing APIs and back-end systems </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
