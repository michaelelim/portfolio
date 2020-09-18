import React from 'react'
import './BodyAbout.scss'

export default function BodyAbout(props) {
  return (
    <div className="about">
      <h1 className="about__title">{props.name}</h1>
      <div className="about__wrapper">
        {/* <img className="about__hero-image" src={require("../assets/Images/Hero.jpg")} alt="Picture of Me"/> */}
        <div className="about__hero-text">After 10+ years in the financial industry and a two year hiatus to start a family, my goal is to start my second career. I’ve always had a passion for technologies, and I am ready to prove myself in a new role.  The BrainStation Web Dev and Marketing programs coupled with my wealth of knowledge and experience in content management, will translate into a rewarding career as a Web Developer.</div>
      </div>
    </div>
  )
}
