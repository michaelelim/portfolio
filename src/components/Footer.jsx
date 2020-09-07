import React from 'react'
import './Footer.scss'

export default function Footer(props) {
  return (
    <div className="footer">
      <h1 className="logo">{props.name}</h1>
    </div>
  )
}
