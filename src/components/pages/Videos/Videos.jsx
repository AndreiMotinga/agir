import React from 'react';
import  { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import './Videos.css'

const Videos = () => {
  return (
    <div className="Videos">
      <Carousel showThumbs={false}>
          <div>
            <iframe width="800" height="450" src="https://drive.google.com/file/d/0B5Iq3nnb6TqcSDZ0TFhXaHcxY2c/preview" />
          </div>

          <div>
            <iframe width="800" height="450" src="https://drive.google.com/file/d/0B4e4Pxv7IM9Vc3YzY3JzMi0xRGM/preview" />
          </div>

          <div>
            <iframe width="800" height="450" src="https://drive.google.com/file/d/0B4e4Pxv7IM9VZzVUU3pLTFNRSXM/preview" />
          </div>
      </Carousel>
    </div>
  )
}

export default Videos
