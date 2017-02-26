import React from 'react';
import  { Carousel } from 'react-responsive-carousel'
// import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.css'
import Service from '../Service'

import slide1 from '../../img/carousel/slide-1.png'
import slide2 from '../../img/carousel/slide-2.png'
import slide3 from '../../img/carousel/slide-3.png'

const HomeCarousel = () => {
  const props = {
    title: "Agir Security Solution Inc.",
    text: "Founded in 2009, Agir Security Solution Inc. performs commercial, residential, industrial and service work throughout New York area and nearby states. No matter the electrical job, the experts at Agir are here to help. Our extremely knowledgeable technicians have a variety of electrical skills, including audio and video wiring expertise, to complete any electrical task quickly and professionally."
  }
  return (
    <div>
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        infiniteLoop
      >
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
      </Carousel>
      <Service service={props} />
    </div>
  )
}

export default HomeCarousel
