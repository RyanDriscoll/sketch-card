import React from 'react';
import Frame from '../components/Frame.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class FrameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    const x = 1; //this.props.x
    const frameArray = [];
    for (let y = 1; y <= 9; y++) {
      frameArray.push(<Link key={y} to={`/singleview/${x}/${y}`}><Frame x={x} y={y} /></Link>);
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

