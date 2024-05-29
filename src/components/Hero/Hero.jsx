import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Full Stack Developer! 👋</h1>
        <p className={styles.description}>
  Hi, I'm Adonis Casado, based in New York. 📍<br />
  I have a passion for creating dynamic and user-friendly web applications. 💻<br />
  Reach out if you'd like to learn more about my work! 📬
</p>
        <a href="mailto:adonis.casado@outlook.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/ProfileHolder.png')} alt='hero image of me' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
