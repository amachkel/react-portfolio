import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../projectArray'
import projects from '../projectArray'

export default function ProjectTile() {
  return (
    <>
      {projects.map((project) => (
        <div className="tile-wrapper" key={project.id}>
          <div className="img-wrapper">
            <img src={project.image} alt="project" />
          </div>
          <div className="content">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="link"
                icon={faDisplay}
                color="#4ef2eb"
              />
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="repo"
                icon={faGithub}
                color="#4ef2eb"
              />
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
