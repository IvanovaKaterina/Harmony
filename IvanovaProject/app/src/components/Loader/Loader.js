import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <img className="rot" src = "cat-loader.png" alt = "loader" />
      <div className="text">Загрузка...</div>
    </div>
  )
}

export default Loader;