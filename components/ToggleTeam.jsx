import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiveTeam} from '../actions/games';

class ToggleTeam extends Component {
  constructor(props) {
    super(props);

    this.clickHome = this.clickHome.bind(this);
    this.clickAway = this.clickAway.bind(this);
  }

  clickHome() {
    this.props.setTeam(this.props.home);
  }

  clickAway() {
    this.props.setTeam(this.props.away);
  }

  isActive(value) {
    return `btn ${value === this.props.selectedTeam.team ? 'btn-success' : 'btn-default'}`;
  }

  render() {
    return (
      <div>
        <button
          className={this.isActive('away')}
          onClick={this.clickAway}>
          {this.props.away.name}
        </button>
        <button
          className={this.isActive('home')}
          onClick={this.clickHome}>
          {this.props.home.name}
        </button>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTeam);

function mapStateToProps(state) {
  return {
    home: {
      name: state.games.selectedGame.homeName,
      id  : state.games.selectedGame.homeId,
      team: 'home'
    },
    away: {
      name: state.games.selectedGame.awayName,
      id  : state.games.selectedGame.awayId,
      team: 'away'
    },
    selectedTeam: state.games.selectedTeam
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTeam: function(selectedTeam) {
      dispatch(receiveTeam(selectedTeam));
    }
  };
}
