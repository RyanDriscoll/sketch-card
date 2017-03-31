import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import ComponentOne from './ComponentOne.jsx';

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
        <ComponentOne/>
      </div>
    );
  }
}

export default AppContainer;
