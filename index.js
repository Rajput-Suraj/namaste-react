const heading = React.createElement('h1', null, 'Hello React!');
const sunHeading = React.createElement('h2', { id: 'hello' }, 'Hello Everyone');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([heading, sunHeading]);
