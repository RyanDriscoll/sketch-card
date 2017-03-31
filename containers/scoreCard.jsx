import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LineupContainer from './LineupContainer.jsx';
import ToggleTeam from '../components/ToggleTeam.jsx';
import BatterContainer from './BatterContainer.jsx';


class scoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // home: true
    };
  }

  render() {
    return (
      <div>
        <ToggleTeam />
        <BatterContainer />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(scoreCard);

function mapStateToProps(state) {
  return {
    // homeTeam: state.games.selectedGame.homeName,
    // awayTeam: state.games.selectedGame.awayName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
