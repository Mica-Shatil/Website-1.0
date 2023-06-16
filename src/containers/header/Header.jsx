import React from 'react'
import './header.css'
import headshot from '../../assets/headshot.png'

const Header = () => {
  return (
    <div className="myweb__header section__padding" id="home">
      <div className="myweb__header-content">
        <h1 className="gradient__text">Hello, my name is Mica Shatil!</h1>
        <p>I am a student at the University of Waterloo with experience in project management, data science, consulting, and sales.</p>
      </div>
      <div className="myweb__header-image">
        <img src={ headshot } alt="headshot" />
      </div>
    </div>
  )
}

export default Header