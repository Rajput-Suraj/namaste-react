import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'India',
      address: 'Vijayapur',
    };

    console.log('constructor child-1');
  }

  componentDidMount() {
    console.log('componentDidMount child-1');
    this.timer = setInterval(() => {
      console.log('NAMASTE REACT');
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate child-1');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount child-1');
    clearInterval(this.timer);
  }

  render() {
    console.log('render child-1');
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              location: 'US',
              address: 'NYC',
            });
          }}
        >
          Change Address
        </button>
        <h3>Name:{this.props.name}</h3>
        <h3>Location:{this.state.location}</h3>
        <h3>Address:{this.state.address}</h3>
      </>
    );
  }
}

export default Profile;
