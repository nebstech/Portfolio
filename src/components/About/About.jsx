import { getImageUrl } from '../../utils';
import styles from './About.module.css';

import React from 'react';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl('about/aboutImage.png')} alt='me sitting using a desktop' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon' />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              As a frontend developer, I specialize in crafting visually appealing, responsive, and highly optimized websites that provide a seamless user experience across all devices.
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt='server icon' />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              With a knack for backend development, I excel at creating fast, efficient, and secure back-end systems and APIs, ensuring smooth and reliable data handling and storage.
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt='ui icon' />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              Passionate about UI design, I have developed numerous landing pages and comprehensive design systems, focusing on user-centric and aesthetically pleasing interfaces.
            </p>
          </div>
          </li>
        </ul>
      </div>
    </section>
  )
};
