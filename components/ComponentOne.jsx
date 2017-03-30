import React, {Component} from 'react';
import {connect} from 'react-redux';

class nextCard extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(evt) {

  }


  render() {

    return (
          <div>
              <p>
                  <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left" value={'subtract'}></span></button>
                   <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-menu-up"></span></button>
                   <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-right" value={'add'}></span></button>
              </p>
          </div>
    );
  }
}


export default nextCard;
