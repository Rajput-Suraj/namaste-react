import React, { Component } from 'react';

import Profile from './Profile';

class AboutClass extends Component {
  constructor(props) {
    super(props);

    console.log('Parent constructor');
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount');
  }

  render() {
    console.log('Parent render');

    return (
      <>
        <div>About Page</div>
        <Profile name="Suraj" />
      </>
    );
  }
}

export default AboutClass;
