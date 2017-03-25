import React from 'react';
import Frame from './Frame.jsx';
import ComponentOne from './ComponentOne.jsx';


class SingleView extends React.Component {

    componentDidMount() {
    
    }
    render() {
        return (
        <div>
            <Frame/>
            <ComponentOne/>
        </div>
        );
    }
}

export default SingleView;