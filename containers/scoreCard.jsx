import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LineupContainer from './LineupContainer.jsx'


class scoreCard extends Component {
  constructor(props){
    super(props)
    this.state = { home: true }
  }

  clickHome(){
    this.setState({home:true})
  }

  clickAway(){
    this.setState({home:false})
  }

  render(){
    return (
      <div id="container">
        <button onClick={this.clickHome} type="button home-button" id="button1" >{"Reds"}</button>
        <button onClick={this.clickAway} type="button contact-button" id="button2">{"Athletics"}</button>
      </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(scoreCard);

function mapStateToProps(state) {
  return {
      homeTeam: state.selectedGame,
      awayTeam: state.selectedGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
