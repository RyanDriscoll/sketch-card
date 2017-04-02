import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addLineup} from '../actions/lineup';
import store from '../store';

// import Lineup from '../components/Lineup.jsx'
class BatterContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const lineup = [];
    if (this.props.selectedTeam.team) {
      const team = this.props.players[this.props.selectedTeam.team];
      for (let i = 1; i <= 9; i++) {
        let names;
        if (team[i].length) {
          names = team[i].map((player, idx) => <div key={idx} >{player.name}</div>);
        } else {
          names = <div ></div>;
        }
        lineup.push(<div className="atBat" key={i} order={i}>{names}</div>);
      }
    }
    return (
      <div>
        {
          lineup
        }
      </div>

    );
  }

}


function mapStateToProps(state) {
  return {
    selectedTeam: state.games.selectedTeam,
    players     : state.players
  };
}
export default connect(mapStateToProps)(BatterContainer);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     ,
//     ,
//     ,
//
//   }, dispatch);
// }
