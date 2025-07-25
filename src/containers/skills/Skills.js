import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Lottie from 'react-lottie-player';
import Coding from '../../assets/lotties/Coding.json';
import Cybersecurity from '../../assets/lotties/Cybersecurity.json';
import Teamwork from '../../assets/lotties/Teamwork.json';
import Astronomy from '../../assets/lotties/Astronomy.json';
import Learning from '../../assets/lotties/Learning.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  const skillData = [
  {
    text: "Developing full-stack applications using C#, Java, and SQL",
    icon: Coding,
  },
  {
    text:
      "Applying cybersecurity best practices & building ethically conscious systems",
    icon: Cybersecurity,
  },
  {
    text: "Collaborating in Agile teams using Git & GitHub workflows",
    icon: Teamwork,
  },
  {
    text:
      "Exploring the intersection of astronomy and data science (Astroinformatics)",
    icon: Astronomy,
  },
  {
    text:
      "Lifelong learner always chasing knowledge, creativity, and community",
    icon: Learning,
  },
];
  return (
    <div className={isDark ? "dark-mode skills-section" : "skills-section"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>

      {/* 🌸 Carousel across entire pink section */}
      <div className="carousel-container">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          arrows={true}
          pauseOnHover={true}
        >
          {skillData.map((skill, index) => (
            <div key={index} className="skills-carousel-slide">
              <Lottie
                loop
                play
                animationData={skill.icon}
                style={{ width: 60, height: 60, margin: "0 auto" }}
              />
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
                style={{ textAlign: "center", marginTop: "1rem" }}
              >
                {skill.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}