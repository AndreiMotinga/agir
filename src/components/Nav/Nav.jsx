import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <ul className="Nav">
      <li><Link to="/">HOME</Link></li>
      <li>
        <Link to="/our-work">OUR WORK</Link>
        <li><Link to="/our-work/photos">PHOTOS</Link></li>
        <li><Link to="/our-work/videos">VIDEOS</Link></li>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
        <ul className="Nav_submenu">
          <li><Link to="/services/security">Security</Link></li>
          <li><Link to="/services/structured-wiring">Structure Wiring</Link></li>
          <li><Link to="/services/window-treatment">Window Treatment</Link></li>
          <li><Link to="/services/interior-design">Interior Design</Link></li>
        </ul>
      </li>
      <li><Link to="/contacts">CONTACT US</Link></li>
      <li><a href="//facebook.com">NEWS</a></li>
    </ul>
  )
}

export default Nav
