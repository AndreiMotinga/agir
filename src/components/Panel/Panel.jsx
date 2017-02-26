import React from 'react';
import './Panel.css'

const Panel = (props) => {
  return (
    <div className="Panel">
      <div className="Panel_header">
        <h3>{props.title}</h3>
      </div>
      <div className="Panel_body">
        {props.children}
      </div>
    </div>
  )
}

export default Panel
