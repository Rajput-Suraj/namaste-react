import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
  return (
    <div className="header flex">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/81b4aea0-7b9f-47b6-adfc-2524583da17e/preview.png"
          alt="Logo"
        />
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

function AppLayout() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
