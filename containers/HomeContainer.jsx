import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';



class HomeContainer extends Component{
constructor(props) {
    super(props);
    this.state = {
       
    }
  }

    render(){
        return (
        <div>
            <div>
                <Navbar/>
            </div>
        </div>
        )
    }
}

export default HomeContainer;




