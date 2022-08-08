import React, { Component } from 'react';

class GetInput extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      name: event.target.value,
    });

    console.log('event:', event.target.value);
  };

  logValue = () => {
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <h2>Get Input Value</h2>
        <h3>
          My name is <span className="title-name">{this.state.name}</span>
        </h3>
        <input
          type="text"
          onChange={this.handleInput}
          placeholder="Type name here..."
        />
        <button onClick={this.logValue}>Click</button>
      </div>
    );
  }
}

export default GetInput;
