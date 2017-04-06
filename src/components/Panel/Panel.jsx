import React from 'react';
import './Panel.css'

const Panel = ({ title, children, align }) => {
  let header
  if(title) {
    header = (
      <div className="Panel_header">
        <h3 className="Panel_title" style={{"text-align": align}}>{title}</h3>
      </div>
    )
  }
  return (
    <div className="Panel">
      {header}
      <div className="Panel_body">
        {children}
      </div>
    </div>
  )
}

export default Panel
