import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_menu">
        <li className="sm-hidden"><Link to="/">HOME</Link></li>
        <li>
          <a href="#">OUR WORK</a>
          <ul className="Nav_menu_submenu">
            <li><Link to="/our-work/photos">PHOTOS</Link></li>
            <li><Link to="/our-work/videos">VIDEOS</Link></li>
          </ul>
        </li>
        <li>
          <a href="#">SERVICES</a>
          <ul className="Nav_menu_submenu">
            <li><Link to="/services/security">SECURITY</Link></li>
            <li><Link to="/services/structured-wiring">STRUCTURE WIRING</Link></li>
            <li><Link to="/services/window-treatment">WINDOW TREATMENT</Link></li>
            <li><Link to="/services/interior-design">INTERIOR DESIGN</Link></li>
          </ul>
        </li>
        <li><Link to="/contacts">CONTACTS</Link></li>
        <li className="sm-hidden"><a href="#">NEWS</a></li>
      </ul>
    </nav>
  )
}

export default Nav
