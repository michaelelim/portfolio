import React from 'react'
import './Body.scss'

export default function Body(props) {
  return (
    <div className="body">
      <h1 className="body__logo">{props.name}</h1>
      <div><img className="body__hero-image" src={require("../assets/Images/Hero.jpg")} alt="Picture of Me"/></div>
    </div>
  )
}
