
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import histories from "../../data/history.json";
import {getImageFromUrl} from "../../utils"

export const Experience = () => {
  return (
  <section id="experience" className={styles.container}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
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
        <ul className={styles.history}>
           { histories.map((history, id) => {
                return (
                    <li key = {id} className={styles.historyItem}>
                        <img 
                         src={getImageFromUrl(history.imageSrc)} 
                         alt={`${history.organisation} Logo`} 
                        />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${history.role}, ${history.organisation}`}</h3>
                            <p>{`${history.startDate} - ${history.endDate}`}</p>
                            <ul>
                                {
                                    history.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })
                                }
                            </ul>
                        </div>    
                    </li>
                )
            })}
        </ul>
    </div>
  </section>
  );
};
