import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', null, 'Hello React!');
const sunHeading = React.createElement('h2', { id: 'hello' }, 'Ignited app with parcel');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([heading, sunHeading]);
