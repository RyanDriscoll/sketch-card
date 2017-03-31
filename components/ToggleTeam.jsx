import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiveTeam} from '../actions/games';

class ToggleTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'away'
    };
    this.clickHome = this.clickHome.bind(this);
    this.clickAway = this.clickAway.bind(this);
  }

  clickHome() {
    this.setState({selected: 'home'});
    console.log('this.props.home', this.props.home);
    this.props.setTeam(this.props.home);
  }

  clickAway() {
    this.setState({selected: 'away'});
    this.props.setTeam(this.props.home);
  }

  isActive(value) {
    return `btn ${value === this.state.selected ? 'btn-success' : 'btn-default'}`;
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
        // {this.state.home ?
        // <button onClick={this.clickAway} className="btn btn-default" id="button2">{this.props.awayTeam}</button>
        // :
        // <button onClick={this.clickAway} className="btn btn-success" id="button2">{this.props.awayTeam}</button>}

        // {this.state.home ? <button onClick={this.clickHome} className="btn btn-success" id="button1" >{this.props.homeTeam}</button> : <button onClick={this.clickHome} className="btn btn-success"className="btn btn-default" id="button1">{this.props.homeTeam}</button>}


export default connect(mapStateToProps, mapDispatchToProps)(ToggleTeam);

function mapStateToProps(state) {
  return {
    home: {
      name: state.games.selectedGame.homeName,
      id  : state.games.selectedGame.homeId,
      home: true
    },
    away: {
      name: state.games.selectedGame.awayName,
      id  : state.games.selectedGame.awayId,
      home: false
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
