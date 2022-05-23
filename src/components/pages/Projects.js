import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ProjectTile from '../ProjectTile'
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

      <div className="project flex-zone">
        <ProjectTile />
      </div>
    </div>
  )
}
