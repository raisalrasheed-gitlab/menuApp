import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging (optional)
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div
          style={{
            padding: '20px',
            border: '1px solid red',
            backgroundColor: '#ffcccc',
          }}
        >
          <h2>Something went wrong.</h2>
          <p>
            We encountered an issue while rendering the content. Please try
            again later.
          </p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // If no error, render children components as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
