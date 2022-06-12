import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div class=" container col-12 d-flex flex-wrap">
    {gifItems}
</div>

    


  );
};

export default GifList;