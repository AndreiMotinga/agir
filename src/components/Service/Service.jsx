import React from 'react';
import Panel from '../Panel'
import './Service.css'

const Service = (props) => {
  const url = "https://s3.amazonaws.com/ezworks-agir/services/"
  let { image, title, text } = props.service
  if(image) image = <img className="Service_img" src={`${url}${image}`} alt={title}/>

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
