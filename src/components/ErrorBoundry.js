import React from "react";

class ErrorBoundry extends React.Component {
  state = {
    error: false,
    errorDescription : '',
    errorInfo : '',
  };

  componentDidCatch(error, errorInfo) {
    this.setState((prevState) => {
      return {
        error: true,
        errorDescription : error,
        errorDetails : errorInfo
      };
    });
  }
  render() {
    return this.state.error ? (
      <div>
        <h1>Something went wrong.</h1>
        <h2 style={{ wordBreak : 'break-all'}}>{this.state.errorDescription}</h2>
        <p style={{ wordBreak : 'break-all'}}>{this.state.errorDetails}</p>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
