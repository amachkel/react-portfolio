import React from 'react'
import '../assets/styles/index.scss'
import { Link, NavLink } from 'react-router-dom'
// import Logo from '../assets/images/Alex-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

export default function BurgerMenu({ open, setOpen }) {
  //attempt to have burger slide out on click. didn't work
  function closeMe(open) {
    setOpen(open)
    const burgerEl = document.querySelector('.burgerMenu')
    return (burgerEl.style.animation = 'slideOutLeft 0.3s')
  }
  console.log(`still open? ${open}`)
  return (
    <div className="burgerMenu ">
      <button
        open={open}
        onClick={() => closeMe(!open)}
        className="hamburger responsive-burger"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {open ? (
        <>
          <nav className="navbarBurger">
            <NavLink
              exact="true"
              onClick={() => setOpen(!open)}
              className="navBurger"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              exact="true"
              onClick={() => setOpen(!open)}
              //   activateclassname="active"
              className="about-link navBurger"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              exact="true"
              onClick={() => setOpen(!open)}
              activateclassname="active"
              className="contact-link navBurger"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </nav>
          <ul>
            <li>
              <a
                className="svgLink"
                onClick={() => setOpen(!open)}
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
                onClick={() => setOpen(!open)}
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
                onClick={() => setOpen(!open)}
                target="_blank"
                rel="noreferrer"
                href="https://codepen.io/amachkel"
              >
                <FontAwesomeIcon icon={faCodepen} color="#fff" />
              </a>
            </li>
          </ul>
        </>
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  )
}
