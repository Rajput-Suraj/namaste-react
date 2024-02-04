import { Component } from 'react';

import User from '../components/User';
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="padding-container">
        <h1>About Page</h1>
        <User name="John Doe" />
      </div>
    );
  }
}

export default About;
