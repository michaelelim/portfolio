import React from 'react'
import './Body.scss'

export default function Body(props) {
  return (
    <div className="body">
      <h1 className="body__logo">{props.name}</h1>
      <div className="body__hero-image"><img src="../assets/Images/Hero.jpg"/></div>
    </div>
  )
}
