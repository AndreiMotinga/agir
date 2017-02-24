import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../../Service'
import './Services.css'
import data from './services.json'

const Services = ({ match }) => {
  const service = data.categories.find((obj) => {
    return Object.keys(obj)[0] === match.params.id
  })

  return (
    <div className="Services">
      <div className="Services_service">
        <h2>Services {match.params.id}</h2>
        <Service service={service} />
      </div>
      <div className="Services_sidebar">
        <h3>Sidebar</h3>
        <ul>
          <li><Link to="/services/security">Security</Link></li>
          <li><Link to="/services/structured-wiring">Structure Wiring</Link></li>
          <li><Link to="/services/window-treatment">Window Treatment</Link></li>
          <li><Link to="/services/interior-design">Interior Design</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Services
