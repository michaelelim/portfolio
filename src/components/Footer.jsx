import React from 'react'
import './Footer.scss'

export default function Footer(props) {
  return (
    <div className="footer">
      <h1 className="footer__logo">{props.name}</h1>
      <div className="footer__iconwrapper">
        <img className="footer__icons" src={require("../assets/Icons/SVG/logo-linkedin.svg")} alt="Linkedin logo"/>
        <img className="footer__icons" src={require("../assets/Icons/SVG/mail-outline.svg")} alt="Email logo"/>
        <img className="footer__icons" src={require("../assets/Icons/SVG/logo-github.svg")} alt="Github logo"/>
      </div>
    </div>
  )
}
