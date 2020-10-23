import React from 'react'
import ReactPlayer from "react-player"
import './BodyContact.scss'

export default function BodyPortfolio(props) {
  return (
    <div className="contact">
      <h1 className="contact__title">{props.name}</h1>
      <p className="contact__title">Interested in contacting me? It's easy!</p>
      
      <div className="contact__wrapper">
        <a href="mailto:michaelelim@gmail.com" className="contact__hero-text" target="_blank" rel="noopener noreferrer">Email Me</a>
        <a href="https://linkedin.com/in/michaelelim" className="contact__hero-text" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a>
      </div>
    </div>
  )
}
