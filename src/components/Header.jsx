import React from 'react'
import './Header.scss'

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="header__logo">{props.name}</h1>
      <div className="header__rightwrapper">
        <div className="header__option bold">Home</div>
        <div className="header__option">About Me</div>
        <div className="header__option">Projects</div>
        <div className="header__option">Contact Me</div>
      </div>
    </div>
  )
}
