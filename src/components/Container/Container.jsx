import React from 'react';
import './Container.css'

const Container = (props) => {
  return (
    <div className="Container">
      <h2>Container</h2>
      {props.children}
    </div>
  )
}

export default Container
