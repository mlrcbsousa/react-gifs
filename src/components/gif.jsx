import React from 'react';

const Gif = ({ id, clickFunction }) => {
  const handleClick = event => clickFunction(event.target.src.split('/')[4]);
  const link = `https://media.giphy.com/media/${id}/giphy.gif`;
  // doesnt render component at page load
  if (!id) { return null; }
  return (
    <img src={link} alt="" className="gif" onClick={handleClick} />
  );
};

export default Gif;
