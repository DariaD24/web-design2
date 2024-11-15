import React from 'react';

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageGrid;
