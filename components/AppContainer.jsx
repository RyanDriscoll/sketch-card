import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import BottomNavBar from './BottomNavBar.jsx';

const AppContainer = (props) => {

  console.log('APP CONTAINER PROPS', props);
  return (
      <div id="app-root">

        <div className="container">

          { props.children && React.cloneElement(props.children, props)}
        </div>
        <div>
        <BottomNavBar/>
        </div>
      </div>
  );
};


export default AppContainer;
