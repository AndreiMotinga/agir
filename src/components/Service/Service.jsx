import React from 'react';
import Panel from '../Panel'
import './Service.css'

const Service = (props) => {
  const { title, text } = props.service
  return (
    <div className="Service">
      <Panel title={title}>
        <p>{text}</p>
      </Panel>
    </div>
  )
}

export default Service
