import { getImageUrl } from "../../utils"
import styles from './Hero.module.css'
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adonis</h1>
        <p className={styles.description}>I'm a junior full stack developer. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:adonis.casado@outlook.com" className={styles.contactBtn}>
          Contact Me</a>
        </div>
        <img src={getImageUrl('hero/ProfileHolder.svg')} alt='hero image of me' className={styles.heroImg}></img>
        <div className={styles.topblur} />
        <div className={styles.bottomblur} />
    </section>
  )
}

export default Hero