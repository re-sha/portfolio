import React from 'react';
import styles from "./Hero.module.css"
import { getImageFromUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, Resha Here!</h1>
            <p className={styles.description}>
              I am a Junior Software Developer who thrives on crafting solutions that are user-friendly.<br></br>When I'm not coding, you can find me sipping on coffee and experimenting with data analysis.
            </p>
            <a href = "mailto:email@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src = {getImageFromUrl("hero/heroImage.png")} alt="image of a software developer" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};



