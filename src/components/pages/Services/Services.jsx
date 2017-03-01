import React from 'react'
import Service from '../../Service'
import data from './data.json'

const Services = ({ match }) => {
  const categories = data.categories.find((obj) => obj.id === match.params.id)
    const services = categories.services.map((s, i) => (
      <Service service={s} key={i} />)
    )

  return (
    <div className="Services">
      {services}
    </div>
  )
}

export default Services
