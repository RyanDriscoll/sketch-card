import React, {Component} from 'react';
import {connect} from 'react-redux';

class BottomNavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(evt) {

  }


  render() {
    console.log('PROPS IN BOTTOM NAVBAR', this.props);
    return (
          <nav className="bottom-navbar">
                  <div className="arrow-left" onClick={() => (console.log('LEFT ARROW'))}/>


                  <div id="home_plate" onClick={() => (console.log('home plate'))}/>

                   <div className="arrow-right" onClick={() => (console.log('RIGHT ARROW'))} />
          </nav>
    );
  }
}


export default BottomNavBar;
