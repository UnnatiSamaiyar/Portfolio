import "./HeroImgstyles.css";
import React from 'react'
import IntroImg from "../assets/1.gif";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
             <img className="intro-img" src={IntroImg} alt="IntroImg">
             </img>
        </div>
    </div>
  )
}

export default HeroImg