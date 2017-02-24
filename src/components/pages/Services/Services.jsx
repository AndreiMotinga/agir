import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Service from '../../Service'
import './Services.css'
import data from './services.json'

const Services = ({ match }) => {
  return (
    <div className="Services">
      <div className="Services_service">
        <h2>Services {match.params.id}</h2>
        <Service
          id={match.params.id}
          data={data}
        />
      </div>
      <div className="Services_sidebar">
        <h3>Sidebar</h3>
        <ul>
          <li><Link to="/services/security">Security</Link></li>
          <li><Link to="/services/structure-wiring">Structure Wiring</Link></li>
          <li><Link to="/services/window-treatment">Window Treatment</Link></li>
          <li><Link to="/services/interior-design">Interior Design</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Services
