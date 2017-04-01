import React, { Component } from 'react';

const AppContainer = (props) => {
  return (
    <div id="app-root">
    {props.children && React.cloneElement(props.children, props)}
    </div>
  );
};

export default AppContainer;
