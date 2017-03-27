import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SingleView from './SingleView.jsx'
import {AppContainer} from './AppContainer';
import HomeContainer from '../containers/HomeContainer.jsx';
import ComponentOne from './ComponentOne.jsx';

import {LineupContainer} from '../containers/LineupContainer.jsx';

import Frame from './Frame.jsx';

import { getGames } from '../actions/games';
import scoreCard from '../containers/scoreCard.jsx';


import {Provider} from 'react-redux';
import store from '../store';

function onHomeEnter() {
    store.dispatch(getGames());
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer} onEnter={onHomeEnter} />
                <Route path ="/componentone" component={ComponentOne} />

                <Route path ="/componenttwo" component={SingleView} />
                <Route path ="/scorecard" component={scoreCard} />
                  <Route path ="/lineup" component={LineupContainer} />

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
