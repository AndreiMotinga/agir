import React from 'react';
import './Panel.css'

const Panel = (props) => {
  const title = props.title
  let header
  if(title) {
    header = (
      <div className="Panel_header">
        <h3 className="Panel_title">{title}</h3>
      </div>
    )
  }
  return (
    <div className="Panel">
      {header}
      <div className="Panel_body">
        {props.children}
      </div>
    </div>
  )
}

export default Panel
