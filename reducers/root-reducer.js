import React from 'react';
import { combineReducers } from 'redux'
import games from './games';
import frames from './frames';
import lineup from './lineup-reducer'

export default combineReducers({games, frames, lineup});
