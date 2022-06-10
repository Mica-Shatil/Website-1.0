import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="myweb__navbar">
      <div className="myweb__navbar-links">
        <div className="myweb__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="myweb__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#experience">Experience</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="myweb__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="myweb__navbar-menu_container scale-up-center">
          <div className="myweb__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#experience">Experience</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar