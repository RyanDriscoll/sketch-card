import React from 'react';
import Frame from './Frame.jsx';
import ComponentOne from './ComponentOne.jsx';
import DisplayInfo from './DisplayInfo.jsx';

class SingleView extends React.Component {

    constructor(props){
    super(props)
      this.state = {
        batter: 1,
        inning: 1,
        data: null
      }
     this.addBatter = this.addBatter.bind(this);
     this.subtractBatter = this.subtractBatter.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
    
    }

    handleSubmit(){
        let dataURL = canvas.toDataURL();
        console.log(dataURL);
    }

    addBatter(e){
        console.log("BATTER", this.state.batter)
        this.setState({
        batter: this.state.batter++,
    })
     console.log("BATTER", this.state.batter);
     this.handleSubmit();
    }

    subtractBatter(e){
        console.log("e", e)
        this.setState({
        batter: this.state.batter--,
        })
        
    }

    render() {
        return (
        <div>
            <DisplayInfo batter={this.state.batter} inning={this.state.inning}/>
            <Frame/>
            <ComponentOne addBatter={this.addBatter} subtractBatter={this.subtractBatter}/>
        </div>
        );
    }
}

export default SingleView;