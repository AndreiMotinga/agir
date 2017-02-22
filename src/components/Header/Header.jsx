import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/our-work">Our Work</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>
  )
}

export default Header
