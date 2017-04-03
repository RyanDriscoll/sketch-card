import { ADD_PLAYER, ADD_ROSTERS, SELECT_GAME } from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

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
      newState.rosters.home = action.home;
      newState.rosters.away = action.away;
      break;

    case SELECT_GAME:
      return initialState;

    case REHYDRATE:

      return action.payload.players;
      break;

    default:
      return state;
  }
  return newState;
}
