import React, { useState, useEffect } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>; 
  }

  return (
    <div className="App">
      <div className="cards-container">
        {photos.map(photo => (
          <div className="card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="card-content">
              <h3>{photo.title}</h3>
              <p>ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
