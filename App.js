import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
  return <h1>Namaste React 🚀</h1>;
};

const Container = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is a functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Container />);
