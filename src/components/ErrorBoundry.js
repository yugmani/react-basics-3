import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    // Error {_suppressLogging: true}
    console.log(info);
    // {componentStack: " at Hero (https://react-hyv7i1.stackblitz.io/~/src/components/Hero.js:7:17) at ErrorBoundry (https://react-hyv7i1.stackblitz.io/~/src/components/ErrorBoundry.js:29:9) at div at App"}
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong ...!</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
