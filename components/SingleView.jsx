import React from 'react';
import Frame from './Frame.jsx';
import {connect} from 'react-redux';
import BottomNavBar from './BottomNavBar.jsx';
import DisplayInfo from './DisplayInfo.jsx';
import saveDrawing from '../actions/drawings.js';

export class SingleView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      batter     : 1,
      inning     : 1,
      drawingdata: null
    };
    this.addBatter = this.addBatter.bind(this);
    this.subtractBatter = this.subtractBatter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
  }


  handleSubmit() {
    const canvas = document.getElementById('testcanvas');
    const dataURL = canvas.toDataURL();
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFrame(context);

  }

  addBatter(e) {
    let value = this.state.batter;
    value++;
    this.setState({
      batter: value,
    });
    this.handleSubmit();
  }

  subtractBatter(e) {
    let value = this.state.batter;
    value--;
    this.setState({
      batter: value,
    });
    this.handleSubmit();
  }

  drawFrame(context) {
    context.save();
    context.translate(150, 100);
    context.rotate(Math.PI / 4);
    context.lineWidth = 5;
    context.strokeStyle = '#e5e5e5';
    context.strokeRect(0, 0, 130, 130);
    context.restore();

    context.lineWidth = 3;
    context.strokeStyle = '#e5e5e5';
    context.moveTo(5, 5);
    context.lineTo(15, 15);
    context.stroke();
    context.moveTo(15, 5);
    context.lineTo(5, 15);
    context.stroke();

    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 2; row++) {
        const y = row % 2 === 0 ? 345 : 295;
        const x = col * 50 + 5;
        if (col === 2 && row === 1) {
          break;
        }
        context.save();
        context.translate(x, y);
        context.lineWidth = 5;
        context.strokeStyle = '#e5e5e5';
        context.strokeRect(0, 0, 50, 50);
        context.restore();
      }
    }
  }


  render() {

    const x = this.props.params.x;
    const y = this.props.params.y;
    return (
        <div>
            <DisplayInfo batter={this.state.batter} inning={this.state.inning}/>
            <Frame x={x} y={y} selected={true}/>
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
