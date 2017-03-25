import React from 'react';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: false,
      drawing: false,
      drawings : {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null,
          7: null,
          8: null,
          9: null
        }
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveDrawing = this.saveDrawing.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.draw = this.draw.bind(this);

    this.scale = 5;

    this.currentMousePosition = {
        x: 0,
        y: 0
    };

    this.lastMousePosition = {
        x: 0,
        y: 0
    };
  }

   saveDrawing(e){
        
    }

  componentDidMount() {
    this.drawFrame();
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
    this.setState({drawing: true})
    this.currentMousePosition.x = ((e.pageX - (this.canvas.offsetLeft - (this.canvas.clientWidth * ((this.scale - 1) / 2)))) * (this.canvas.width / this.canvas.clientWidth)) / this.scale;
    this.currentMousePosition.y = ((e.pageY - (this.canvas.offsetTop - (this.canvas.clientHeight * ((this.scale - 1) / 2)))) * (this.canvas.height / this.canvas.clientHeight)) / this.scale;
  }

  handleMouseUp(e) {
    this.setState({drawing: false});
  }

  handleMouseMove(e) {
    if (!this.state.drawing || !this.state.selected) return;

    this.lastMousePosition.x = this.currentMousePosition.x;
    this.lastMousePosition.y = this.currentMousePosition.y;

    this.currentMousePosition.x = ((e.pageX - (this.canvas.offsetLeft - (this.canvas.clientWidth * ((this.scale - 1) / 2)))) * (this.canvas.width / this.canvas.clientWidth)) / this.scale;
    this.currentMousePosition.y = ((e.pageY - (this.canvas.offsetTop - (this.canvas.clientHeight * ((this.scale - 1) / 2)))) * (this.canvas.height / this.canvas.clientHeight)) / this.scale;

    this.draw(this.lastMousePosition, this.currentMousePosition);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.selected) {
     
      this.setState({selected: !this.state.selected});
    } else {
      console.log(this.currentMousePosition.x, this.currentMousePosition.y)
      if (this.currentMousePosition.x < 20 && this.currentMousePosition.y < 20) {
        this.zoom.reverse();
        this.setState({selected: !this.state.selected});
      }
    }
  }

  render(){
    return (
      <canvas
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        className="frame shadow"
        width="300px"
        height="400px"
        ref={el => {this.canvas = el;}}
      />
    )
  }
}

export default Frame;