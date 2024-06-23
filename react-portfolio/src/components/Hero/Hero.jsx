import React from 'react'
import styles from "../Hero/Hero.module.css"
import { getImageFromUrl } from '../../utils';



const Hero = () => {
  return (
    <section>
        <div className={styles.heading}>
            <h1>Hi, Resha Here!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus modi ut quas unde eveniet rem aperiam. Molestiae pariatur illum nemo corrupti a ea</p>
            <button>Contact Me</button>
        </div>
        <div>
            <img src = {getImageFromUrl("hero/heroImage.png")} alt="image of a software developer"></img>
        </div>
    </section>
  );
};

export default Hero


