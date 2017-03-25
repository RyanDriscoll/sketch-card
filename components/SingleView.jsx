import React from 'react';
import Frame from './Frame.jsx';
import ComponentOne from './ComponentOne.jsx';
import DisplayInfo from './DisplayInfo.jsx';

class SingleView extends React.Component {

    componentDidMount() {
    
    }
    render() {
        return (
        <div>
            <DisplayInfo batter={2} inning={2}/>
            <Frame/>
            <ComponentOne/>
        </div>
        );
    }
}

export default SingleView;