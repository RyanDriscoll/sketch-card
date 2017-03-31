import React, {Component} from 'react';
import DisplayInfo from './DisplayInfo';

export class SingleBatterView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {


    return (
    <div>
        <DisplayInfo batter={this.state.batter} inning={this.state.inning}/>

        <ComponentOne addBatter={this.addBatter} subtractBatter={this.subtractBatter}/>
    </div>
    );
  }
}


function mapDispatchToProps(dispatch) {

  return {
    addDrawing: function(drawing) {
      dispatch(saveDrawing(drawing));
    }
  };
}

export default connect(
mapDispatchToProps)(SingleView);
