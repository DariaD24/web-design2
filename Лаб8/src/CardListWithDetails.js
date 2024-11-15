import React, { useState } from 'react';

function CardListWithDetails({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="card-list">
        {items.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => openImage(item.image)}>Подробнее</button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <div className="modal-content">
            <span className="close-button" onClick={closeImage}>&times;</span>
            <img src={selectedImage} alt="Подробнее" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardListWithDetails;
