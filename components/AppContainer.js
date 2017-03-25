import React, { Component } from 'react';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-root">
        <div className="container">
          { this.props.children ? this.props.children : null }
        </div>
      </div>
    );
  }
}

export default AppContainer;
