import React from 'react';

import '../App.css';

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-card">
        <div className="shimmer-img"></div>
        <h1 className="shimmer-title"></h1>
        <p className="shimmer-desc"></p>
        <p className="shimmer-rating"></p>
        <div style={{ display: 'flex' }}>
          <div className="shimmer-action"></div>
          <div className="shimmer-action"></div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
