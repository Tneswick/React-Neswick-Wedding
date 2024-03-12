// Photos.js
import React from 'react';

const photosData = [
  // Add your photo URLs here
  'path/to/photo1.jpg',
  'path/to/photo2.jpg',
  'path/to/photo3.jpg',
  // Add more photos as needed
];

function Photos() {
  return (
    <div className='photos-div'>
      <h2 className='photos-title'>Photos</h2>
      <div className="photo-grid">
        {photosData.map((photo, index) => (
          <img key={index} src={photo} alt={`Capture ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Photos;
