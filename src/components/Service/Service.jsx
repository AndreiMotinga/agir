import React from 'react';

const Service = (props) => {
  return (
    <div className="Service">
      <h2>Service {props.id}</h2>
      {props.data.toString()}
    </div>
  )
}

export default Service
