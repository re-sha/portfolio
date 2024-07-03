import React from "react";
import { getImageFromUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Let&apos;s connect.</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img  src={getImageFromUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href = "https://www.linkedin.com/in/resha/?connectType=message">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img  src={getImageFromUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href = "https://github.com/re-sha">GitHub</a>
            </li>
            
        </ul>
    </footer>
  );
};
