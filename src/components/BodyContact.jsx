import React from 'react'
import './BodyContact.scss'
import mail from "../assets/Images/mail.png"
import linkedin from "../assets/Images/linkedin.jpg"

export default function BodyPortfolio(props) {
  return (
    <div className="contact">
      <h1 className="contact__title">{props.name}</h1>
      <p className="contact__title">Interested in contacting me? It's easy!</p>
      
      <div className="contact__wrapper">
        <a href="mailto:michaelelim@gmail.com" target="_blank" rel="noopener noreferrer"><img className="contact-image" alt="Gmail" src={mail}/></a>
        <a href="https://linkedin.com/in/michaelelim" target="_blank" rel="noopener noreferrer"><img className="contact-image" alt="LinkedIn" src={linkedin}/></a>
      </div>
    </div>
  )
}
