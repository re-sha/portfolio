import React from 'react'
import styles from "../Hero/Hero.module.css"
import { getImageFromUrl } from '../../utils';



const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, Resha Here!</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus modi ut quas unde eveniet rem aperiam. Molestiae pariatur illum nemo corrupti a ea</p>
            <button className={styles.contactBtn}>Contact Me</button>
        </div>
        <div>
            <img src = {getImageFromUrl("hero/heroImage.png")} alt="image of a software developer" className={styles.heroImg}></img>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;


