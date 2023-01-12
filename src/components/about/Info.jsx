import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi"

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">670hrs Full-Stack Web Dev</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Tech Specs</h3>
            <span className="about__subtitle">JavaScript, CSS/SASS, ReactJS</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">TBD</h3>
            <span className="about__subtitle">Lorem ipsum dolor</span>
        </div>
    </div>
  )
}

export default Info