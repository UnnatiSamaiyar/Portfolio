import "./WorkCardStyles.css"

import React from 'react'
import p1 from "../assets/p1.avif"
import { NavLink } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title"></h2>
                <div className="project-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard