import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="header__logo">{props.name}</h1>
      <div className="header__rightwrapper">
        <div className="header__option header__option-bold">Home</div>
        <Link className="header__option" to="/about">About Me</Link>
        <Link className="header__option" to="/portfolio">Portfolio</Link>
        <div className="header__option">Contact Me</div>
      </div>
    </div>
  )
}
