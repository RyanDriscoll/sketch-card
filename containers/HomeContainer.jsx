import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import Home from '../components/Home.jsx';



class HomeContainer extends Component{
constructor(props) {
    super(props);
    this.state = {

    }
  }

    render(){
        console.log('games',this.props.games);
        return (
        <div>
            <div>
                <Home games={this.props.games}/>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.games.games
    };
}

export default connect(mapStateToProps)(HomeContainer);




