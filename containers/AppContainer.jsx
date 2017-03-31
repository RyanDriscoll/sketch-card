import React, { Component } from 'react';

const AppContainer = (props) => {
  return (
    <div id="app-root">
      { props.children ? props.children : null }
    </div>
  );
};

export default AppContainer;
