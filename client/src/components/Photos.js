import React, { useState } from 'react';
import './Photos.css';

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const numPhotos = 24; // Total number of photos

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  // Generate image paths using a loop
  const photoPaths = Array.from({ length: numPhotos }, (_, index) => `/images/img${index + 1}.jpg`);

  return (
    <div className='photos-div'>
      <h2 className='photos-title'>Photos</h2>
      <div className="photos-grid">
        {photoPaths.map((path, index) => (
          <div key={index} className="photo-item" onClick={() => handleClick(path)}>
            <img
              src={path}
              alt={`Still ${index + 1}`}
              className="thumbnail"
            />
          </div>
        ))}
        {selectedPhoto && (
          <div className="photo-modal" onClick={handleClose}>
            <img
              src={selectedPhoto}
              alt="Selected Still"
              className="modal-content"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
