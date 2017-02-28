import React from 'react';
import Panel from '../Panel'
import './Service.css'

const Service = (props) => {
  let { image, title, text } = props.service
  if(image) image = <img className="Service_img" src={image} alt={title}/>

  return (
    <div className="Service">
      <Panel title={title}>
        {image}
        {text}
      </Panel>
    </div>
  )
}

export default Service
