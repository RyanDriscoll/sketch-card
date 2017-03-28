import React from 'react';
import {connect} from 'react-redux';

import {receiveFrame} from '../actions/frames';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drawing: false,
      paths: [],
      points: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.draw = this.draw.bind(this);

    this.currentMousePosition = {
        x: 0,
        y: 0
    };

    this.lastMousePosition = {
        x: 0,
        y: 0
    };
  }

  componentDidMount() {
    this.drawFrame();
  }

  componentWillReceiveProps(nextProps) {
    console.log('in receive props')
    nextProps.frames[this.props.x][this.props.y].forEach(frame => {
      for (let i = 0; i < frame.length; i++) {
        this.draw(frame[i], frame[i + 1]);
      }
    });
  }

  componentWillUnmount() {
    console.log('unmounted', this.props, this.state.paths)
    this.props.saveFrame(this.state.paths, this.props.x, this.props.y)
  }

  drawFrame() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.save();
    this.ctx.translate(150, 100)
    this.ctx.rotate(Math.PI/4);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#e5e5e5';
    this.ctx.strokeRect(0, 0, 130, 130);
    this.ctx.restore();

    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#e5e5e5';
    this.ctx.moveTo(5, 5);
    this.ctx.lineTo(15, 15);
    this.ctx.stroke();
    this.ctx.moveTo(15, 5);
    this.ctx.lineTo(5, 15);
    this.ctx.stroke();

    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 2; row++) {
        let y = row % 2 === 0 ? 345 : 295;
        let x = col * 50 + 5;
        if (col === 2 && row === 1 ) {
          break;
        }
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#e5e5e5';
        this.ctx.strokeRect(0, 0, 50, 50);
        this.ctx.restore();
      }
    }
  }

  draw(start, end, color = 'black') {
    this.ctx.beginPath();
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 8;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  handleMouseDown(e) {
    this.setState({
      drawing: true,
      points: []
    });
    this.currentMousePosition.x = e.pageX;
    this.currentMousePosition.y = e.pageY;
  }

  handleMouseUp(e) {
    this.setState({
      drawing: false,
      paths: [...this.state.paths, this.state.points]
    });
  }

  handleMouseMove(e) {
    if (!this.state.drawing ) return;
    this.lastMousePosition.x = this.currentMousePosition.x;
    this.lastMousePosition.y = this.currentMousePosition.y;

    this.currentMousePosition.x = e.pageX;
    this.currentMousePosition.y = e.pageY;
    this.draw(this.lastMousePosition, this.currentMousePosition);
    this.setState({
      points: [...this.state.points, this.currentMousePosition]
    });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <canvas
          onClick={this.handleClick}
          id={"testcanvas"}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          className="frame shadow"
          width="300px"
          height="400px"
          ref={el => {this.canvas = el;}}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('mstp', state)
  return {
    frames: state.frames.frames
  };
}

function mapDispatchToProps(dispatch){
    return {
      saveFrame: function(frame, x, y){
        dispatch(receiveFrame(frame, x, y));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Frame);