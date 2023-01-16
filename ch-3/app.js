import React from 'react';
import ReactDOM from 'react-dom/client';

import Logo from './images/naruto.png';
import Profile from './images/profile.png';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Using React.createElement
const header = React.createElement(
  'div',
  { className: 'title' },
  React.createElement('h1', null, 'H1 Header'),
  React.createElement('h2', null, 'H2 Header'),
  React.createElement('h3', null, 'H3 Header')
);

//Using JSX
const headerJSX = (
  <div className="title">
    <h1>H1 Header</h1>
    <h2>H2 Header</h2>
    <h3>H3 Header</h3>
  </div>
);

//Using functional component
const HeaderComponent = () => {
  return (
    <div className="title">
      <h1>H1 Header</h1>
      <h2>H2 Header</h2>
      <h3>H3 Header</h3>
    </div>
  );
};

// Header component using functional arrow component
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <div className="search">
        <input className="search-input" type="search" placeholder="Search..." />
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
      <div className="user-menu">
        <img className="profile" src={Profile} alt="Profile" />
      </div>
    </div>
  );
};

root.render(<Header />);
