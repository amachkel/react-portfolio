import '../../assets/styles/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>
          A full stack software engineer with a history in early childhood
          education, I enjoy using my communication and teaching skills to work
          collaboratively with my teammates and bring strong leadership
          qualities to the table. In my projects, I utilize JavaScript, CSS, and
          HTML with front end and back end technologies such as Node.js, MySql,
          Handlebars, Bulma, and React. I have a lifetime love of learning and
          sharing my knowledge with others.
        </p>
        <p>
          In my free time, I enjoy playing board games and video games with my
          husband, son, and daughter. Some of my hobbies include singing, home
          improvement projects, and loving on my pets.
        </p>
        <p>
          When I start a project, I dedicate myself fully and love a challenge.
          I'd love to connect with other programmers. Let's make something
          awesome together!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#3C873A" />
          </div>
        </div>
      </div>
    </div>
  )
}
