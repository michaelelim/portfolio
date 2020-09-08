import React from 'react'
import './Body.scss'

export default function Body(props) {
  return (
    <div className="body">
      <h1 className="body__title">{props.name}</h1>
      <div className="body__wrapper">
        <img className="body__hero-image" src={require("../assets/Images/Hero.jpg")} alt="Picture of Me"/>
        <div className="body__hero-text">Good morning!  <br/><br/>
          My name's Mike, and I'm a web and process developer.<br/>
          I can make websites and apps, with a keen eye for process improvement. <br/><br/> 
          I am looking for a company that values a team member that takes adversity (like a global pandemic) as an opportunity to follow a passion, take on new challenges, and start a new career path.</div>
      </div>
    </div>
  )
}
