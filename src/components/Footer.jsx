import React from 'react'
import './Footer.scss'

export default function Footer(props) {
  return (
    <div className="footer">
      <h1 className="footer__logo">{props.name}</h1>
      <div className="footer__iconwrapper">
        <a href="https://www.linkedin.com/in/michaelelim/" target="_blank" rel="noopener noreferrer"><img className="footer__icons" src={require("../assets/Icons/SVG/logo-linkedin.svg")} alt="Linkedin logo"/></a>
        <a href="mailto:michaelelim@gmail.com" target="_blank" rel="noopener noreferrer"><img className="footer__icons" src={require("../assets/Icons/SVG/mail-outline.svg")} alt="Email logo"/></a>
        <a href="https://github.com/michaelelim/" target="_blank" rel="noopener noreferrer"><img className="footer__icons" src={require("../assets/Icons/SVG/logo-github.svg")} alt="Github logo"/></a>
      </div>
    </div>
  )
}
