import React from 'react';

const Service = (props) => {
  return (
    <div className="Service">
      <h2>Service {props.id}</h2>
      {JSON.stringify(props.service)}
    </div>
  )
}

export default Service
