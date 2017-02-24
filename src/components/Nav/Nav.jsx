import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <ul className="Nav">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/services">SERVICES</Link></li>
      <li><Link to="/our-work">OUR WORK</Link></li>
      <li><Link to="/contacts">CONTACTS</Link></li>
    </ul>
  )
}

export default Nav
