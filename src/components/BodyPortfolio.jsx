import React from 'react'
import ReactPlayer from "react-player"
import './BodyPortfolio.scss'

export default function BodyPortfolio(props) {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{props.name}</h1>

        <p className="portfolio__title">To help practice different skills, I have created two more versions of a portfolio:</p>
        <h2><a className="portfolio__link" href="https://michaelelim.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio using Gatsby</a></h2>
        <h2><a className="portfolio__link" href="https://michaelelim.wordpress.com/" target="_blank" rel="noopener noreferrer">Portfolio using Wordpress</a></h2>

      <p className="portfolio__title">Below are two examples of the projects I completed for the Web Dev course at BrainStation.</p>
      
      <div className="portfolio__wrapper">
        <section className="portfolio__hero-text">
          <h2 className="portfolio__hero-text-title">You Don't Know Diddly Squat</h2>
          <a className="portfolio__hero-text-link" href="https://michaelelim-capstone-4p.netlify.app/" target="_blank" rel="noopener noreferrer">michaelelim-capstone-4p.netlify.app</a>

          <div className="portfolio__hero-text-inner">You Don't Know Diddly Squat is an online multiplayer quiz game.</div>
          <div className="portfolio__hero-text-inner">As a gamer, it was an enjoyable way to hone my skills.<br/>
            As a parent, I wanted to have a game for the whole family.<br/>
            Finally, I wanted to have a game that you could play during zoom calls.</div>
          <div className="portfolio__hero-text-inner">Using the following tech stack:</div>
          <ul className="portfolio__hero-text-inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>Websockets</li>
            <li>Socket.IO</li>
            <li>Trivia API</li>
            <li>Git</li>
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>        
        </section>
        
        <ReactPlayer className="portfolio__hero-image" url="https://www.youtube.com/watch?v=trd6syJrSp0" width="300px"/>
      </div>

      <div className="portfolio__wrapper">
        <section className="portfolio__hero-text">
          <h2 className="portfolio__hero-text-title">24 Hour Bell Hackathon</h2>
          <div className="portfolio__hero-text-inner">The chosen topic was mental health, addiction and video games.</div>
          <div className="portfolio__hero-text-inner">Using the following tech stack:</div>
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
