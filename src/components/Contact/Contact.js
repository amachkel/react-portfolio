import React from 'react'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

export default function Contact() {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
            />
          </h1>
        </div>
      </div>
    </>
  )
}
