import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addLineup} from '../actions/lineup';
import store from '../store';
import BottomNavBar from '../components/BottomNavBar.jsx';
// import Lineup from '../components/Lineup.jsx'


export class LineupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team   : '',
      roster : [ {}, {name: 'heyward'}, {name: 'baez'}, {name: 'bryant'}, {name: 'Rizzo'}, {name: 'Contreras'}, {name: 'Zobrist'}, {name: 'Arrieta'}, {name: 'Schwarber'}, {name: 'Almora Jr.'} ],
      lineup : [],
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      player7: '',
      player8: '',
      player9: ''


    };
    this.onTeamSubmit = this.onTeamSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {

  }

  handleChange(e) {
    console.log('HANDLE CHNG', e.target.value);
    this.setState({
      [e.target.name]: e.target.value,

    });


  }

  onTeamSubmit(evt) {

    store.dispatch(addLineup({
      player1: this.state.player1,
      player2: this.state.player2,
      player3: this.state.player3,
      player4: this.state.player4,
      player5: this.state.player5,
      player6: this.state.player6,
      player7: this.state.player7,
      player8: this.state.player8,
      player9: this.state.player9
    }));
  }

  render() {
    const roster = this.state.roster;
    let thisPlayerNum;
    const lineupArr = [];
    for (let i = 1; i <= 9; i++) {
      thisPlayerNum = 'player' + i;
      lineupArr.push(
      <li key={i + thisPlayerNum}>
        <select value={this.state[thisPlayerNum]} label="" name={thisPlayerNum} onChange={this.handleChange}>
          {

            roster && roster.map((playerObj, index) => {
              return <option value={playerObj.name} onChange={this.handleChange} key={playerObj.name + index}>{playerObj.name}</option>;
            })
          }
        </select>
      </li>
    );

    }


    return (
      <div>
        <ol>
          {
            lineupArr
          }
        </ol>
        <div>
        <button className="btn-btn-primary" onClick={this.onTeamSubmit}>Submit</button>
        </div>
        <BottomNavBar/>
      </div>

    );
  }

}


// export default connect(mapStateToProps)(Lineup);
//
// function mapStateToProps(state) {
//   return {
//
//
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     ,
//     ,
//     ,
//
//   }, dispatch);
// }
