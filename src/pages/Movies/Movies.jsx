import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Перенаправлення на сторінку з результатами пошуку
    navigate(`/movies?search=${searchTerm}`);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Movies;