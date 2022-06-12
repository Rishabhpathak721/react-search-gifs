import React from 'react';
import './giftitem.css';

const GifItem = (image) => {
  return (
    <div className="d-flex align-items-start">
      <img className='gif-image' src={image.gif.images.downsized.url} />
    </div>
  )
};

export default GifItem;