import React from 'react';
import './Service.css'

const Service = (props) => {
  const { title, text } = props.service
  return (
    <div className="Service">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Service
