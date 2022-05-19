import React from 'react'
import '../assets/styles/index.scss'
import { NavLink } from 'react-router-dom'
// import Logo from '../assets/images/Alex-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

export default function BurgerMenu({ isOpen, setOpen }) {
  console.log(`still open? ${isOpen}`)

  return (
    <div>
      {isOpen ? (
        <div className="burgerMenu">
          <div className="navBurgerWrapper">
            <nav>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                className="navBurger"
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                //   activateclassname="active"
                className="about-link navBurger"
                to="/about"
              >
                ABOUT
              </NavLink>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                //   activateclassname="active"
                className="contact-link navBurger"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </nav>
            <ul className="burgerList">
              <li>
                <a
                  className="svgLink"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/alex-harkins/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
              </li>
              <li>
                <a
                  className="svgLink"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/amachkel/"
                >
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
              </li>
              <li>
                <a
                  className="svgLink"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/amachkel"
                >
                  <FontAwesomeIcon icon={faCodepen} color="#fff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}
