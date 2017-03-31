import { ADD_PLAYER, ADD_ROSTERS } from '../constants';

const initialState = {
  home: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
  away: {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []},
  rosters: {
    home: [],
    away: []
  }
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case ADD_PLAYER:
      newState[action.team] = newState[action.team][action.order].concat([action.player])
      break;

    case ADD_ROSTERS:
      newState.rosters.home = newState.rosters.home.concat(action.home)
      newState.rosters.away = newState.rosters.away.concat(action.away)
      break;

    default:
      return state;
  }
  return newState;
}