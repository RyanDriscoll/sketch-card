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
        roster: [{name: 'heyward'}, {name: 'baez'}, {name: 'bryant'}, {name: 'Rizzo'}],
        lineup: []

      }
      this.onTeamSubmit = this.onTeamSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    console.log('HANDLE CHNG', e.target.value)

  }

  onTeamSubmit(e){
    console.log('ON TEAM SUBMIT', e.target.value)
    e.preventDefault()
    console.log('LINUP TARGET', e.target.value)
    this.setState({lineup: [...e.target.value]})
  }

  render(){
    let roster = this.state.roster

    return (
      <div>
        <ol>
        <li>
        <select value={this.state.lineup} onChange={this.handleChange}>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
      </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

        <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

        <li>
        <select>
          {
            roster && roster.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
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
