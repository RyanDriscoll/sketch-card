import React from 'react';
import {connect} from 'react-redux';
import {receivePaths} from '../actions/frames';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: false,
      paths  : [],
      points : []
    };
    console.log('PROPS!!!!!!!!!!!!!!!!!!!!!!!',props)
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.draw = this.draw.bind(this);

    this.currentMousePosition = { x: 0, y: 0 };

    this.lastMousePosition = { x: 0, y: 0 };
  }

  componentDidMount() {
    this.drawFrame();
    if (this.props.frames[this.props.homeOrAway][this.props.x][this.props.y]) {
      this.props.frames[this.props.homeOrAway][this.props.x][this.props.y].forEach(path => {
        for (let i = 0; i < path.length - 1; i++) {
          this.draw(path[i], path[i + 1]);
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const oldPaths = this.props.frames[this.props.homeOrAway][this.props.x][this.props.y];
    const newPaths = nextProps.frames[this.nextProps.homeOrAway][nextProps.x][nextProps.y];
    if (oldPaths.length !== newPaths.length) {
      newPaths.forEach(path => {
        for (let i = 0; i < path.length - 1; i++) {
          this.draw(path[i], path[i + 1]);
        }
      });
    }
  }

  componentWillUnmount() {
    console.log('GIVE ME SOMETHING PLEASE!)!)!)!)!!)!)!)!)!)!)!)!)!)!)!)!')
    if (this.props.selected) {
      this.props.saveFrame(this.props.homeOrAway, this.state.paths, this.props.x, this.props.y);
    }
  }

  drawFrame() {
    const width = this.props.width;
    const height = this.props.height;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.save();
    this.ctx.translate(width / 2, height / 4);
    this.ctx.rotate(Math.PI / 4);
    this.ctx.lineWidth = height / 80;
    this.ctx.strokeStyle = '#e5e5e5';
    this.ctx.strokeRect(0, 0, height / 4, height / 4);
    this.ctx.restore();

    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 2; row++) {
        const boxStart = height - ((height / 8) + (height / 80));
        const y = row % 2 === 0 ? boxStart : boxStart - (height / 8); // height - (height / 8 + height / 80)
        const x = col * (height / 8) + (height / 80);
        if (col === 2 && row === 1) {
          break;
        }
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.lineWidth = height / 80;
        this.ctx.strokeStyle = '#e5e5e5';
        this.ctx.strokeRect(0, 0, height / 8, height / 8);
        this.ctx.restore();
      }
    }
  }

  draw(start, end, color = 'black') {
    const intFrameWidth = window.innerWidth;
    const screenWidth = window.screen.width;
    // console.log('screenWidth', screenWidth, intFrameWidth, document.documentElement.clientWidth)
    const height = this.props.height;
    const width = this.props.width;
    const scale = 300 / width;
    this.ctx.beginPath();
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = height / 40;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(start.x / scale, start.y / scale);
    this.ctx.lineTo(end.x / scale, end.y / scale);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  handleMouseDown(e) {
    if (this.props.selected) {
      this.setState({
        drawing: true,
        points : [ {x: e.pageX || e.touches[0].pageX, y: e.pageY || e.touches[0].pageY} ]
      });
      this.currentMousePosition.x = e.pageX || e.touches[0].pageX;
      this.currentMousePosition.y = e.pageY || e.touches[0].pageY;
    }
  }

  handleMouseUp(e) {
    if (this.props.selected) {
      this.setState({
        drawing: false,
        paths  : [ ...this.state.paths, this.state.points ]
      });
    }
  }

  handleMouseMove(e) {
    if (!this.state.drawing || !this.props.selected) return;
    // console.log('onMouseMove being called?')
    this.lastMousePosition.x = this.currentMousePosition.x;
    this.lastMousePosition.y = this.currentMousePosition.y;

    this.currentMousePosition.x = e.pageX || e.touches[0].pageX;
    this.currentMousePosition.y = e.pageY || e.touches[0].pageY;
    this.draw(this.lastMousePosition, this.currentMousePosition);
    this.setState({
      points: this.state.points.concat([ {x: e.pageX || e.touches[0].pageX, y: e.pageY || e.touches[0].pageY} ])
    });
  }

  render() {
    const width = this.props.selected ? '300px' : '150px';
    const height = this.props.selected ? '400px' : '200px';

    return (
      <div>
        <canvas
          onClick={this.handleClick}
          id={'testcanvas'}
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onTouchEnd={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          onTouchMove={this.handleMouseMove}
          className="frame shadow"
          width={width}
          height={height}
          ref={el => { this.canvas = el; }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapping state to props', state)
  return {
    frames: state.frames, 
    homeOrAway: state.game.selectedTeam.team
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveFrame: function(team, paths, x, y) {
      dispatch(receivePaths(team, paths, x, y));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Frame);
