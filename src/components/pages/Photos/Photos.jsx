import React from 'react';
import './Photos.css'

import slide1 from '../../../img/photos/1.jpg'
import slide2 from '../../../img/photos/2.jpg'
import slide3 from '../../../img/photos/3.jpg'
import slide4 from '../../../img/photos/4.jpg'

const Photos = () => {
  return (
    <div className="Photos">

      <img src={slide1}/>
      <img src={slide2}/>
      <img src={slide3}/>
      <img src={slide4}/>

      <img src={slide1}/>
      <img src={slide2}/>
      <img src={slide3}/>
      <img src={slide4}/>

      <img src={slide1}/>
      <img src={slide2}/>
      <img src={slide3}/>
      <img src={slide4}/>
    </div>
  )
}

export default Photos
