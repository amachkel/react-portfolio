import React, { useState } from 'react'
import '../../assets/styles/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Slider from 'react-slick'
import candyCrush from '../../assets/thumbnails/candy-crush.png'
import gaHikes from '../../assets/thumbnails/ga-hikes.png'
import hardbackLife from '../../assets/thumbnails/hardback-life.png'
import codeQuiz from '../../assets/thumbnails/code-quiz.png'
import teamProfile from '../../assets/thumbnails/team-profile-generator.png'
import techBlog from '../../assets/thumbnails/tech-blog.png'
import weatherDashboard from '../../assets/thumbnails/weatherDashboard.png'
import rockPaperScissors from '../../assets/thumbnails/rock-paper-scissors.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowDown,
  faCircleArrowUp,
  faDisplay,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const images = [
  {
    image: candyCrush,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: gaHikes,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: hardbackLife,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: codeQuiz,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: teamProfile,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: techBlog,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: weatherDashboard,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
  {
    image: rockPaperScissors,
    repo: 'https://github.com/amachkel/react-candy-crush',
    link: 'https://amachkel.github.io/react-candy-crush/',
    desc: 'A desktop version of Candy Crush build with React.',
  },
]

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowUp} color="#fff" />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowDown} color="#fff" />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    // speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: 'linear',
    beforeChange: (current, next) => setImageIndex(next),
  }
  return (
    <div className="container projects-page responsive-cont">
      <div className="project-text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            index={15}
          />
        </h1>
      </div>
      <div className="carousel-zone">
        <div className="slider">
          <Slider {...settings}>
            {images.map((obj, i) => (
              <div className={i === imageIndex ? 'slide activeSlide' : 'slide'}>
                <div
                  className="slide-wrapper"
                  style={{ backgroundImage: `url(${obj.image})` }}
                >
                  <a href={obj.link}>
                    <FontAwesomeIcon
                      className="link"
                      icon={faDisplay}
                      color="#4ef2eb"
                    />
                  </a>
                  {/* <img src={obj.image} alt={'project'} /> */}
                  <a href={obj.repo}>
                    <FontAwesomeIcon
                      className="repo"
                      icon={faGithub}
                      color="#4ef2eb"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
