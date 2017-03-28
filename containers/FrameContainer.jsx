import React from 'react';
import Frame from './Frame.jsx';
import {connect} from 'react-redux';

export class FrameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    const x = this.props.x; //this.props.x
    const frameArray = [];
    for (let y = 1; y <= 9; y++) {
      frameArray.push(<Frame x={x} y={y} />);
    }

    return (
      <div>
        {
          frameArray
        }
      </div>
    );
  }
}

function mapStateToProps(state){

  return {
  }
}

function mapDispatchToProps(dispatch){

  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FrameContainer);

