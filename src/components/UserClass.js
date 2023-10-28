import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="userDetails">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Plus
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <p>Email: nandujasthi@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
