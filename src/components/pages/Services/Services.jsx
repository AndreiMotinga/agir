import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../../Service'
import Panel from '../../Panel'
import './Services.css'
import data from './data.json'

const Services = ({ match }) => {
  const categories = data.categories.find((obj) => obj.id === match.params.id)
    const services = categories.services.map((s, i) => (
      <Service service={s} key={i} />)
    )

  return (
    <div className="Services">
      <div className="Services_sidebar">
        <Panel title="Services">
          <ul className="Services_sidebar_menu">
            <li><Link to="/services/security">Security</Link></li>
            <li><Link to="/services/structured-wiring">Structure Wiring</Link></li>
            <li><Link to="/services/window-treatment">Window Treatment</Link></li>
            <li><Link to="/services/interior-design">Interior Design</Link></li>
          </ul>
        </Panel>
      </div>
      <div className="Services_service">
        <h2>Services {match.params.id}</h2>
        {services}
      </div>
    </div>
  )
}

export default Services
