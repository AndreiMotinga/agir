import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './Photos.css'

import slide1 from '../../../img/photos/1.jpg'
import slide2 from '../../../img/photos/2.jpg'
import slide3 from '../../../img/photos/3.jpg'
import slide4 from '../../../img/photos/4.jpg'

const Photos = () => {
  const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]
  return (
    <ImageGallery
      items={images}
      thumbnailPosition="left"
      slideInterval={2000} />
  );
}

export default Photos
