import React from 'react'
import data from './data.json'
import Panel from '../../Panel'
import './Services.css'

const Services = ({ match }) => {
  const url = "https://s3.amazonaws.com/ezworks-agir/services/"
  let service = data.categories.find((obj) => obj.id === match.params.id)
  let { image, title, text } = service
  if(image) image = <img className="Service_img" src={`${url}${image}`} alt={title}/>

  return (
    <div>
      <h3>{title}</h3>
      {image}
      <div dangerouslySetInnerHTML={{__html: text}} />
    </div>
  )
}

export default Services
