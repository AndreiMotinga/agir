import React from 'react';
import Panel from '../Panel'
import './Service.css'

const Service = (props) => {
  const { image, title, text } = props.service
  return (
    <div className="Service">
      <Panel title={title}>
        <img className="Service_img" src={image} alt={title}/>
        {text}
      </Panel>
    </div>
  )
}

export default Service
