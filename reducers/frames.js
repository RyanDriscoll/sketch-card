import {ADD_PATHS_HOME, ADD_PATHS_AWAY, SELECT_GAME } from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
    home:{
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    },
    away:{
      1: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},  
    }
    // 2: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 3: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 4: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 5: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 6: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 7: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 8: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 9: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 10: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 11: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 12: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 13: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 14: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 15: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 16: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 17: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 18: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 19: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
    // 20: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    // case ADD_INNING:
    case ADD_PATHS_HOME:
      if (!newState.home[action.x]) {
        newState.home[action.x] = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
      }
      newState.home[action.x] = Object.assign({}, newState.home[action.x], {
          [action.y]: newState.home[action.x][action.y].concat(action.paths)
        });
      break;
    
    case ADD_PATHS_AWAY:
      if (!newState.away[action.x]) {
        newState.away[action.x] = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
      }
      newState.away[action.x] = Object.assign({}, newState.away[action.x], {
          [action.y]: newState.away[action.x][action.y].concat(action.paths)
        });
      break;

    case SELECT_GAME:
      return initialState;

    case REHYDRATE:
      return action.payload.frames;

    default:
      return state;
  }
  return newState;
}