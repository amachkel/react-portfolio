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
} from '@fortawesome/free-solid-svg-icons'

const images = [
  candyCrush,
  gaHikes,
  hardbackLife,
  codeQuiz,
  teamProfile,
  techBlog,
  weatherDashboard,
  rockPaperScissors,
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
            {images.map((img, i) => (
              <div className={i === imageIndex ? 'slide activeSlide' : 'slide'}>
                <img src={img} alt={'project'} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
