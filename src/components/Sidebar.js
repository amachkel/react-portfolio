import React from 'react'
import '../assets/styles/index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/Alex-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Alex logo" />
      </Link>
      <nav className="sidebar">
        <NavLink exact="true" activateclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activateclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activateclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="sidebar-list">
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
