import { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    const { name } = this.props;

    return (
      <div>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>{name}</h2>
        <h3>johndoe@example.com</h3>
      </div>
    );
  }
}

export default User;
