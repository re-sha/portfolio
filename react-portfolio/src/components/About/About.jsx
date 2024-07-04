import styles from "../About/About.module.css";
import { getImageFromUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about" className={styles.container}> 
      <h2 className={styles.title}>About</h2>
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
              <h3>Microservices Developer</h3>
              <p>Developed and maintained Spring Boot Microservices</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src = {getImageFromUrl("about/cursorIcon.png")}
              alt = "cursor Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Experience in building responsive and optimised websites</p>
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
