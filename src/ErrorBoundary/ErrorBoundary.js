import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }
}

export default ErrorBoundary;
