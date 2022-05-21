// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import "../../assets/styles/index.scss";
// import AnimatedLetters from "../AnimatedLetters";
// // import Slider from 'react-slick'
// // import ReactTooltip from 'react-tooltip'
// import images from "../../imagesArray";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import {
//   faCircleArrowDown,
//   faCircleArrowUp,
// } from "@fortawesome/free-solid-svg-icons";

// export default
function Projects() {
  console.log(images);
  const [letterClass, setLetterClass] = useState("text-animate");
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowUp} color="#fff" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowDown} color="#fff" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

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
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="container projects-page responsive-cont">
      <div className="project-text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
            index={15}
          />
        </h1>
      </div>
      <div className="carousel-zone">
        <div className="slider">
          <Slider {...settings}>
            {images.map((obj, i) => (
              <div
                key={uuidv4()}
                className={i === imageIndex ? "slide activeSlide" : "slide"}
              >
                {obj.className === "slide activeSlide" ? (
                  <a href="#" data-tip="React-tooltip">
                    {" "}
                    ◕‿‿◕{" "}
                  </a>
                ) : null}

                <ReactTooltip place="bottom" type="info" effect="float" />
                <div
                  className="slide-wrapper"
                  style={{ backgroundImage: `url(${obj.image})` }}
                >
                  <a href={obj.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="link"
                      icon={faDisplay}
                      color="#4ef2eb"
                    />
                  </a>
                  <a href={obj.repo} target="_blank" rel="noreferrer">
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
  );
}
