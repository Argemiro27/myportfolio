import React, { useState } from 'react';
import myphoto from '../../assets/img/photo.png';

const Photo = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const style = {
    width: '190px',
    height: '190px',
    borderRadius: '100%',
    borderTop: '2px solid #1e1d29',
    borderBottom: '2px solid #1e1d29',
    borderLeft: '4px solid #1e1d29',
    borderRight: '4px solid #1e1d29',
    backgroundSize: 'cover',
    filter: 'grayscale(30%)', // aplicando o tom de cinza
    opacity: isHovering ? '0.7' : '1',
    transition: 'opacity 1s',
    marginRight:'0px',
  };

  return (
    <img
      src={myphoto}
      alt="Minha foto"
      style={style}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default Photo;
