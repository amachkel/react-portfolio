import candyCrush from './assets/thumbnails/candy-crush.png'
import gaHikes from './assets/thumbnails/georgia-map.png'
import hardbackLife from './assets/thumbnails/librarybackground.png'
import codeQuiz from './assets/thumbnails/code-quiz-zoom.png'
import teamProfile from './assets/thumbnails/team-profile-zoom.png'
import techBlog from './assets/thumbnails/tech-hero.png'
import weatherDashboard from './assets/thumbnails/weatherDashboard.png'
import rockPaperScissors from './assets/thumbnails/rock-paper-scissors.png'
import livelyJams from './assets/thumbnails/lively-jams.png'
import { v4 as uuidv4 } from 'uuid'

const images = [
  {
    id: uuidv4(),
    image: gaHikes,
    name: 'GA Hikes',
    repo: 'https://github.com/amachkel/GA-hikes',
    link: 'https://amachkel.github.io/GA-hikes/',
    desc: 'Built with HTML, CSS, JavaScript, and Bootstrap',
  },
  {
    id: uuidv4(),
    image: hardbackLife,
    name: "It's a Hardback Life",
    repo: 'https://github.com/amachkel/its_a_hardback_life_book_club',
    link: 'https://a-hardback-life.herokuapp.com/',
    desc: 'Built with HTML/CSS/JavaScript, MySQL, Express, Vue, Handlebars, Third Party APIs',
  },
  {
    id: uuidv4(),
    image: livelyJams,
    name: 'Lively Jams',
    repo: 'https://github.com/amachkel/lively-jams',
    link: 'https://amachkel.github/io/lively-jams',
    desc: 'Built with HTML/CSS/JavaScript, React, Spotify API',
  },
  {
    id: uuidv4(),
    image: techBlog,
    name: 'Tech Blog',
    repo: 'https://github.com/amachkel/tech-blog',
    link: 'https://tech-blog-amkh.herokuapp.com/',
    desc: 'Built with HTML/CSS/JavaScript, Bulma, Node.js, MySQL, Sequelize, Express.js',
  },
  {
    id: uuidv4(),
    image: codeQuiz,
    name: 'Code Quiz',
    repo: 'https://github.com/amachkel/code-quiz',
    link: 'https://amachkel.github.io/code-quiz/',
    desc: 'Built with HTML, CSS, JavaScript, and Bootstrap',
  },
  {
    id: uuidv4(),
    image: teamProfile,
    name: 'Team Profile',
    repo: 'https://github.com/amachkel/team-profile-generator',
    link: 'https://github.com/amachkel/team-profile-generator',
    desc: 'CLI app built with HTML/CSS/JavaScript, Bootstrap, jQuery, Node.js, tested with Jest',
  },
  {
    id: uuidv4(),
    image: candyCrush,
    name: 'Candy Crush',
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'Desktop version of a popular game built with React',
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
]

export default images
