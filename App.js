import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
  return (
    <div className="header flex">
      <div className="logo-container">
        <a href="/">
          <img
            className="logo"
            src="https://assets.materialup.com/uploads/81b4aea0-7b9f-47b6-adfc-2524583da17e/preview.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function RestaurantCard() {
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
          alt="Restaurant Image"
        />
      </div>
      <div className="res-info">
        <h3>KFC</h3>
        <h4>Burgers, Biryani Chinchwad</h4>
        <h4>Rating 4.5</h4>
        <h4>Price: 400 for two</h4>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search-input" placeholder="Search for restaurant and food" />
      </div>
      <div>
        <RestaurantCard />
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
