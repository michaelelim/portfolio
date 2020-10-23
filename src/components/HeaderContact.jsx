import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

export default function HeaderContact(props) {
  return (
    <div className="header">
      <h1 className="header__logo">{props.name}</h1>
      <div className="header__rightwrapper">
        <Link className="header__option" to="/">Home</Link>
        <Link className="header__option">About Me</Link>
        <Link className="header__option" to="/portfolio">Portfolio</Link>
        <div className="header__option header__option-bold">Contact Me</div>
      </div>
    </div>
  )
}
