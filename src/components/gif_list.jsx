import React from 'react';

// internal
import Gif from './gif';

const GifList = ({ gifs, clickFunction }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} clickFunction={clickFunction} />) }
    </div>
  );
};

export default GifList;
