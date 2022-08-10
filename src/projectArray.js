import employeeTracker from './assets/thumbnails/employeeTracker.png'
import gaHikes from './assets/thumbnails/georgia-map.png'
import hardbackLife from './assets/thumbnails/librarybackground.png'
import codeQuiz from './assets/thumbnails/code-quiz-zoom.png'
import teamProfile from './assets/thumbnails/team-profile-zoom.png'
import techBlog from './assets/thumbnails/tech-hero.png'
import weatherDashboard from './assets/thumbnails/weatherDashboard.png'
import rockPaperScissors from './assets/thumbnails/rock-paper-scissors.png'
import livelyJams from './assets/thumbnails/lively-jams.png'
import adventerPlanner from './assets/thumbnails/adventure-planner.png'
import socialNetwork from './assets/thumbnails/socialNetwork.png'
import fakeSite from './assets/thumbnails/fake-site.png'
import { v4 as uuidv4 } from 'uuid'

const images = [
  {
    id: uuidv4(),
    image: adventerPlanner,
    name: 'Group It Travel Planner',
    repo: 'https://github.com/amachkel/adventure-planner',
    link: 'https://group-it-travel-planner.herokuapp.com/',
    desc: 'Fullstack app built with MERN stack, Material UI for styling, JWT for authentication.',
  },
  {
    id: uuidv4(),
    image: hardbackLife,
    name: "It's a Hardback Life",
    repo: 'https://github.com/amachkel/its_a_hardback_life_book_club',
    link: 'https://a-hardback-life.herokuapp.com/',
    desc: 'Fullstack app HTML/CSS/JS, MySQL, Express, Vue, Handlebars, 3rd party APIs',
  },
  {
    id: uuidv4(),
    image: employeeTracker,
    name: 'Employee Tracker',
    repo: 'https://github.com/amachkel/employee-tracker',
    link: 'https://github.com/amachkel/employee-tracker',
    desc: 'Content Management System built with Node.js, Inquirer, and MySQL.',
  },
  {
    id: uuidv4(),
    image: techBlog,
    name: 'Tech Blog',
    repo: 'https://github.com/amachkel/tech-blog',
    link: 'https://tech-blog-amkh.herokuapp.com/',
    desc: 'Fullstack built with HTML/CSS/JS, Bulma, Node.js, MySQL, Sequelize, Express.js',
  },
  {
    id: uuidv4(),
    image: fakeSite,
    name: 'Fake Site',
    repo: 'https://github.com/amachkel/fake-site',
    link: 'https://fake-site-iota.vercel.app/',
    desc: 'Frontend app built with React, React Bootstrap, NextJS, Vimeo API',
  },
  {
    id: uuidv4(),
    image: gaHikes,
    name: 'GA Hikes',
    repo: 'https://github.com/amachkel/GA-hikes',
    link: 'https://amachkel.github.io/GA-hikes/',
    desc: 'Front end app built with HTML/CSS/JS and Bootstrap',
  },

  {
    id: uuidv4(),
    image: socialNetwork,
    name: 'Social Network API',
    repo: 'https://github.com/amachkel/social-network-api',
    link: 'https://github.com/amachkel/social-network-api',
    desc: 'Backend app built with MongoDB, Mongoose, Node.js, Express.js',
  },
  {
    id: uuidv4(),
    image: codeQuiz,
    name: 'Code Quiz',
    repo: 'https://github.com/amachkel/code-quiz',
    link: 'https://amachkel.github.io/code-quiz/',
    desc: 'Front end app built with HTML/CSS/JS and Bootstrap',
  },
  {
    id: uuidv4(),
    image: teamProfile,
    name: 'Team Profile',
    repo: 'https://github.com/amachkel/team-profile-generator',
    link: 'https://github.com/amachkel/team-profile-generator',
    desc: 'CLI app built with HTML/CSS/JS, Bootstrap, jQuery, Node.js, tested with Jest',
  },
  {
    id: uuidv4(),
    image: weatherDashboard,
    name: 'Weather Dashboard',
    repo: 'https://github.com/amachkel/weather-dashboard',
    link: 'https://amachkel.github.io/weather-dashboard/',
    desc: 'Built with HTML/CSS/JavaScript, Bootstrap, OpenWeather API.',
  },
  {
    id: uuidv4(),
    image: rockPaperScissors,
    name: 'Rock, Paper, Scissors',
    repo: 'https://github.com/amachkel/rock-paper-scissors',
    link: 'https://amachkel.github.io/rock-paper-scissors/',
    desc: 'Built with HTML/CSS/JavaScript, Bootstrap, Animate.css.',
  },
  {
    id: uuidv4(),
    image: livelyJams,
    name: 'Lively Jams',
    repo: 'https://github.com/amachkel/lively-jams',
    link: 'https://amachkel.github.io/lively-jams',
    desc: 'Frontend app built with HTML/CSS/JS, React, Spotify API',
  },
]

export default images
