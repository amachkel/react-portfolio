import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Alex-logo_white.png'
import Avatar from '../../assets/images/avatar.jpg'
import AnimatedLetters from '../AnimatedLetters'
import '../../assets/styles/index.scss'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const jobArray = [
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <div className="container home-page responsive-cont">
      <div className="text-zone">
        <div className="flex-wrapper">
          <h1>
            <span className={`${letterClass} responsive-text`}>H</span>
            <span className={`${letterClass} _12 responsive-text`}>i,</span>
            <br />
            <span className={`${letterClass} _13 responsive-text`}>I</span>
            <span className={`${letterClass} _14 responsive-text`}>'m</span>

            <img
              className="logo-img responsive-logo"
              src={LogoTitle}
              alt="Alex"
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={15}
              className="responsive-text"
            />
          </h1>
          <h2>MERN Stack Developer / Woman In Tech</h2>
          <Link to="/contact" className="flat-button responsive-button">
            Let's get in touch!
          </Link>
        </div>
      </div>
      <div className="img-zone">
        <img className="avatar-img responsive-img" src={Avatar} alt="Alex" />
      </div>
    </div>
  )
}
