import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_menu">
        <li><Link to="/">HOME</Link></li>
        <li>
          <Link to="/our-work">OUR WORK</Link>
          <ul className="Nav_menu_submenu">
            <li><Link to="/our-work/photos">Photos</Link></li>
            <li><Link to="/our-work/videos">Videos</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
          <ul className="Nav_menu_submenu">
            <li><Link to="/services/security">Security</Link></li>
            <li><Link to="/services/structured-wiring">Structure Wiring</Link></li>
            <li><Link to="/services/window-treatment">Window Treatment</Link></li>
            <li><Link to="/services/interior-design">Interior Design</Link></li>
          </ul>
        </li>
        <li><Link to="/contacts">CONTACT US</Link></li>
        <li><a href="//facebook.com">NEWS</a></li>
      </ul>
    </nav>
  )
}

export default Nav
