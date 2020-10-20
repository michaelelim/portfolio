import React from 'react'
import './BodyPortfolio.scss'

export default function BodyPortfolio(props) {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{props.name}</h1>
      <div className="portfolio__wrapper">
        <div className="portfolio__hero-text">These are two examples of the projects I completed for the Web Dev course at BrainStation</div>
        <img className="portfolio__hero-image" src={require("../assets/Images/bellhackathon.png")} alt="Bell Hackathon"/>
      </div>
    </div>
  )
}
