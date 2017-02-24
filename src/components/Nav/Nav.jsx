import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <ul className="Nav">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li>
        <Link to="/services">SERVICES</Link>
        <ul className="Nav_submenu">
          <li><Link to="/services/security">Security</Link></li>
          <li><Link to="/services/structure-wiring">Structure Wiring</Link></li>
          <li><Link to="/services/window-treatment">Window Treatment</Link></li>
          <li><Link to="/services/interior-design">Interior Design</Link></li>
        </ul>
      </li>
      <li><Link to="/our-work">OUR WORK</Link></li>
      <li><Link to="/contacts">CONTACTS</Link></li>
    </ul>
  )
}

export default Nav
