import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LineupContainer from './LineupContainer.jsx';
import FrameContainer from './FrameContainer.jsx';
import { browserHistory } from 'react-router';
import BottomNavBar from '../components/BottomNavBar.jsx';
import ToggleTeam from '../components/ToggleTeam.jsx';
import BatterContainer from './BatterContainer.jsx';
import BatterDisplay from '../components/BatterDisplay.jsx';

class scoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      home        : true,
      selectedteam: null
    };
    this.clickHome = this.clickHome.bind(this);
    this.clickAway = this.clickAway.bind(this);
    this.addBatter = this.addBatter.bind(this);
  }


  clickHome() {
    this.setState({home: true, selectedteam: this.props.homeTeam});
  }

  clickAway() {
    this.setState({home: false, selectedteam: this.props.awayTeam});

  }

  addBatter() {
    browserHistory.push('/lineup');
  }

      //   <div>
      //   <div id="container">
      //     {this.state.home ? <button onClick={this.clickHome} className="btn btn-success" id="button1" >{this.props.homeTeam}</button> : <button onClick={this.clickHome} className="btn btn-success"className="btn btn-default" id="button1">{this.props.homeTeam}</button>}
      //     {this.state.home ? <button onClick={this.clickAway} className="btn btn-default" id="button1">{this.props.awayTeam}</button> : <button onClick={this.clickAway} className="btn btn-success" id="button1">{this.props.awayTeam}</button>}
      //   </div>
      //   <div id="batter">
      //     <BatterDisplay addBatter={this.addBatter} team={this.selectedteam}/>
      //   </div>
      //     <FrameContainer />
      // </div>

  render() {
    console.log('scorecards homeOrAwayProp',this.props.homeOrAway)
    return (
      <div>
        <ToggleTeam />
        <BatterContainer />
        <FrameContainer homeOrAway={this.props.homeOrAway} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(scoreCard);

function mapStateToProps(state) {
  console.log('!@!@!@!@!@!@!@!@!@!@!@@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!',state)
  return {
    homeOrAway: state.games.selectedTeam.team
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
