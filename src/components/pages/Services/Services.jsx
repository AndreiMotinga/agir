import React from 'react'
import Service from '../../Service'
import data from './data.json'

const Services = ({ match }) => {
  let service = data.categories.find((obj) => obj.id === match.params.id)

  return (
    <div className="Services">
      <Service service={service} />
    </div>
  )
}

export default Services
