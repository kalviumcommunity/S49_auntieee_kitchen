import React from 'react';

const ExampleCarouselImage = ({ imageUrl, text }) => {
  return (
    <div className="example-carousel-image">
      <img src={imageUrl} alt="Food" />
      <div className="overlay">
    
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
