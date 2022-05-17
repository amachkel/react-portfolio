import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Alex-logo_white.png'
import './Home.scss'

export default function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          <br />a web developer
        </h1>
        <h2>MERN Stack Developer / JavaScript Ninja / Woman In Tech</h2>
        <Link to="/contact" className="flat-button">
          Let's get in touch!
        </Link>
      </div>
    </div>
  )
}
