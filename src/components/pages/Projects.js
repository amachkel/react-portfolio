import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import images from '../../imagesArray'
import '../../assets/styles/index.scss'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <div className="container projects-page responsive-cont">
      <div className="project-text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            index={15}
          />
        </h1>
      </div>
      <div className="grid grid-zone">
        {images.map((obj, i) => (
          <div key={uuidv4()} className="img-wrapper">
            <img className="blur zoom" src={obj.image} alt="project" />
            <div className="content slide-left fade">
              <h3>{obj.name}</h3>
              <p>{obj.desc}</p>
              <a href={obj.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="link"
                  icon={faDisplay}
                  color="#4ef2eb"
                />
              </a>
              <a href={obj.repo} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="repo"
                  icon={faGithub}
                  color="#4ef2eb"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
