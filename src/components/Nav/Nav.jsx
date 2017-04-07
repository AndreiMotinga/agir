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
            <li><Link to="/services/electrical">ELECTRICAL</Link></li>
            <li><Link to="/services/low-voltage">LOW VOLTAGE</Link></li>
            <li><Link to="/services/design-services">DESIGN SERVICES</Link></li>
            <li><Link to="/services/it-services">IT SERVICES</Link></li>
            <li><Link to="/services/home-office-automation">HOME/OFFICE AUTOMATION</Link></li>
          </ul>
        </li>
        <li><Link to="/contacts">CONTACT US</Link></li>
        <li className="sm-hidden">
          <a href="https://www.facebook.com/Agir-Security-Solution-1508484616105089" target="_blank">NEWS</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
