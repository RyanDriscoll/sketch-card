import React from 'react';
import Frame from '../components/Frame.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class FrameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const x = 1; //this.props.x
    const frameArray = [];
    for (let y = 1; y <= 9; y++) {
      frameArray.push(<Link to={`singleview/${this.props.homeOrAway}/${x}/${y}`} key={y} ><Frame height={200} width={150} x={x} y={y} selected={false} /></Link >);
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

function mapStateToProps(state) {

  return {
    homeOrAway: state.games.selectedTeam.team
  };
}

function mapDispatchToProps(dispatch) {

  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FrameContainer);
