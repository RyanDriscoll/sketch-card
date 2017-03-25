import React from 'react';
import Frame from './Frame.jsx';

class SingleView extends React.Component {

    componentDidMount() {
        // paper.setup(this.canvas);
        // paper.project.importJSON(this.props.json);
        // paper.view.scale(0.57,[25,90]);

    }
    render() {
        return <Frame/>
    }
}

export default SingleView;
