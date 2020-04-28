import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry, something went wrong with this website...</h2>
          <p>Please try to fresh page or come back in 10 minutes.</p>
          <p>
            You can also contact the author{" "}
            <a href="mailto:elliechen.etc@gmail.com">here</a> or report issues
            in{" "}
            <a href="https://github.com/EllieChen-Git/React-COVID-19-Stats">
              GitHub
            </a>
            .
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
