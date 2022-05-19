import React, { useState } from 'react'
import '../../assets/styles/index.scss'
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
  faCircleArrowLeft,
  faCircleArrowRight,
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
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowRight} color="#fff" />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowLeft} color="#fff" />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }
  return (
    <div className="container projects-page">
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div className={i === imageIndex ? 'slide activeSlide' : 'slide'}>
              <img src={img} alt={'image'} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
