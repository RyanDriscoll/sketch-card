import React from 'react';
import { combineReducers } from 'redux'
import drawings from './drawings';
import games from './games';
import frames from './frames';

export default combineReducers({drawings, games, frames});