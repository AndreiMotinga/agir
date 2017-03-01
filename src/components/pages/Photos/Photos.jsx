import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Photos = () => {
  const url = "https://s3.amazonaws.com/ezworks-agir/photos/"
  const images = [
    {
      original: `${url}1.jpg`,
      thumbnail: `${url}1.jpg`,
    },
    {
      original: `${url}2.jpg`,
      thumbnail: `${url}2.jpg`,
    },
    {
      original: `${url}3.jpg`,
      thumbnail: `${url}3.jpg`,
    },
    {
      original: `${url}4.jpg`,
      thumbnail: `${url}4.jpg`,
    },
  ]
  return (
    <ImageGallery
      items={images}
      thumbnailPosition="left"
      slideInterval={2000} />
  );
}

export default Photos
