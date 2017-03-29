import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LineupContainer from './LineupContainer.jsx'


class scoreCard extends Component {
  constructor(props){
    super(props)
    this.state = { 
      home: true
    }
    this.clickHome = this.clickHome.bind(this);
    this.clickAway = this.clickAway.bind(this);
  }

  clickHome(){
    console.log("STATEHOME", this.state.home)
    this.setState({home:true})
  }

  clickAway(){
    console.log("STATEHOME", this.state.home)
    this.setState({home:false})
  }

  render(){
    console.log("PROPS", this.props)
    return (
      <div id="container">
        {this.state.home ? <button onClick={this.clickHome} className="btn btn-success" id="button1" >{this.props.homeTeam}</button> : <button onClick={this.clickHome} className="btn btn-success"className="btn btn-default" id="button1">{this.props.homeTeam}</button>}
        {this.state.home ? <button onClick={this.clickAway} className="btn btn-default" id="button2">{this.props.awayTeam}</button> : <button onClick={this.clickAway} className="btn btn-success" id="button2">{this.props.awayTeam}</button>}
      </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(scoreCard);

function mapStateToProps(state) {
  return {
      homeTeam: state.games.selectedGame.homeName,
      awayTeam: state.games.selectedGame.awayName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
