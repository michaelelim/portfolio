import React from 'react'
import './BodyPortfolio.scss'

export default function BodyPortfolio(props) {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{props.name}</h1>
      <div className="portfolio__wrapper">
        <section className="portfolio__hero-text">
          <p className="portfolio__hero-text-inner">These are two examples of the projects I completed for the Web Dev course at BrainStation.</p>
          <h2 className="portfolio__hero-text-inner">24 Hour Hackathon presented by Bell</h2>
          <div className="portfolio__hero-text-inner">The chosen topic was mental health, addiction and video games.</div>
          <div className="portfolio__hero-text-inner">Using the following tech:</div>
          <ul className="portfolio__hero-text-inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>Netlify</li>
          </ul>        
        </section>
      <img className="portfolio__hero-image" src={require("../assets/Images/bellhackathon.png")} alt="Bell Hackathon"/>
      </div>
    </div>
  )
}
