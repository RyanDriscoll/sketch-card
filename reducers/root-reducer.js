import React from 'react';
import { combineReducers } from 'redux'
import drawings from './drawings';
import games from './games';

export default combineReducers({drawings, games});