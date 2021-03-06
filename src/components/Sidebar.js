import React from 'react'
import '../assets/styles/index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/Alex-logo.png'
import resume from '../alex-harkins-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { saveAs } from 'file-saver'
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faLaptopCode,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/react-portfolio/">
        <img src={Logo} alt="Alex logo" />
      </Link>
      <nav className="sidebar">
        <NavLink exact="true" activateclassname="active" to="/react-portfolio/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activateclassname="active"
          className="about-link"
          to="/react-portfolio/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activateclassname="active"
          className="projects-link"
          to="/react-portfolio/projects"
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activateclassname="active"
          className="contact-link"
          to="/react-portfolio/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="sidebar-list">
        <li>
          <a className="resume" target="_blank" rel="noreferrer" href={resume}>
            <FontAwesomeIcon icon={faFileArrowDown} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alex-harkins/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/amachkel/"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/amachkel"
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
