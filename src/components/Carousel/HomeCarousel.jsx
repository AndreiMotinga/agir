import React from 'react';
import  { Carousel } from 'react-responsive-carousel'
// import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.css'

const HomeCarousel = () => {
  return (
      <div>
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
        >
          <div>
            <img src="http://lorempixel.com/900/500/sports/1/" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="http://lorempixel.com/900/500/sports/2/" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="http://lorempixel.com/900/500/sports/3/" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
