import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


export default class LineupContainer extends Component {
  constructor(props){
    super(props)
      this.state = {
        team: '',
        lineup: [{name: 'heyward'}, {name: 'baez'}, {name: 'bryant'}, {name: 'Rizzo'}]
      }


  }

  render(){
    let lineup = this.state.lineup
    return (
      <div>
        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>

        <select>
          {
            lineup && lineup.map((playerObj, index) => {
              return  <option value={playerObj.name} key={playerObj.name + index}>{playerObj.name}</option>
            })
        }
        </select>


      </div>

    )
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)();
//
// function mapStateToProps(state) {
//   return {
//
//
//
//
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     ,
//     ,
//     ,
//
//   }, dispatch);
// }
