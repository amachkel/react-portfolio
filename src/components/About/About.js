import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

export default function About() {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
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
    </div>
  )
}
