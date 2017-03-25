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
        lineup: [{name: 'heyward'}, {name: 'baez'}, {name: 'bryant'}, {name: 'Rizzo'}]
      }


  }

  onTeamSubmit(e){
    e.preventDefault()
    console.log('LINUP TARGET', e.target.value)
    this.setState({lineup: [...e.target.value]})
  }

  render(){
    let lineup = this.state.lineup
    return (
      <div>
        <ol>
        <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
      </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

        <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

          <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

        <li>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>
        </li>

      </ol>

      <button className="btn-btn-primary" >Submit</button>
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
