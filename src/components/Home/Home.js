import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Alex-logo_white.png'
import Avatar from '../../assets/images/avatar.jpg'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'

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
    <div className="container home-page">
      <div className="text-zone">
        <div className="flex-wrapper">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img className="logo-img" src={LogoTitle} alt="Alex" />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={15}
            />
          </h1>
          <h2>MERN Stack Developer / Woman In Tech</h2>
          <Link to="/contact" className="flat-button">
            Let's get in touch!
          </Link>
        </div>
      </div>
      <div className="img-zone">
        <img className="avatar-img" src={Avatar} alt="Alex" />
      </div>
    </div>
  )
}
