import {RECEIVE_GAMES, SELECT_GAME, SELECT_TEAM } from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  games: [],
  selectedGame: {},
  selectedTeam: {}
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_GAMES:
      newState.games = action.games;
      break;

    case SELECT_GAME:
      newState.selectedGame = action.selectedGame;
      newState.selectedTeam = {
        name: action.selectedGame.awayName,
        // id: action.selectedGame.awayId,
        team: 'away'
      }
      break;

    case SELECT_TEAM:
      newState.selectedTeam = action.selectedTeam;
      break;

    case REHYDRATE:
      console.log(action.payload.games)
       return action.payload.games;
      break;

    default:
      return state;
  }
  return newState;
}
