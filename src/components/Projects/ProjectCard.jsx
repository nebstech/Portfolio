import React from 'react'
import { getImageUrl } from '../../utils'; 
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project : {title, imagesrc, description, demo, source, skills}}) => {
  return (
      <div className={styles.container}>
              <img src={getImageUrl(imagesrc)} alt={`image of ${title}`} className={styles.image}/>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <ul className={styles.skills}>
                {skills.map((skill, skillId) => (
                  <li key={skillId} className={styles.skill}>{skill}</li>
                ))}
              </ul>
              <div className={styles.links}>
                <a href={demo} target='_blank' rel="noopener noreferrer" className={styles.link}>Demo</a>
                <a href={source} target='_blank' rel="noopener noreferrer" className={styles.link}>Source</a>
              </div>
            </div>
  )
}
