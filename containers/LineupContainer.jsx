import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addLineup} from '../actions/lineup'

// import Lineup from '../components/Lineup.jsx'


export class LineupContainer extends Component {
  constructor(props){
    super(props)
      this.state = {
        team: '',
        roster: [{}, {name: 'heyward'}, {name: 'baez'}, {name: 'bryant'}, {name: 'Rizzo'}],
        lineup: [],
        player1: '',
        player2: '',
        player3: '',
        player4: '',
        player5: '',
        player6: '',
        player7: '',
        player8: '',
        player9: ''


      }
      this.onTeamSubmit = this.onTeamSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    console.log('HANDLE CHNG', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,

    })


  }

  onTeamSubmit(evt){

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
      }))
  }

  render(){
    let roster = this.state.roster

    return (
      <div>
        <ol>

        <li>


        <select value={this.state.player1} label="" name="player1" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option   value={playerObj.name} onChange={this.handleChange} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>

      </li>

          <li>
        <select value={this.state.player2} name="player2" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

          <li>
        <select value={this.state.player3} name="player3" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

        <li>
        <select value={this.state.player4} name="player4" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

          <li>
        <select value={this.state.player5} name="player5" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

          <li>
        <select value={this.state.player6} name="player6" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

          <li>
        <select value={this.state.player7} name="player7" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

          <li>
        <select value={this.state.player8} name="player8" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

        <li>
        <select value={this.state.player9} name="player9" onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option  key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
      </select>
        </li>

      </ol>

      <button className="btn-btn-primary" onClick={this.onTeamSubmit}>Submit</button>
      </div>

    )
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
