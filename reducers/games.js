import {RECEIVE_GAMES, SELECT_GAME } from '../constants';

const initialState = {
  games: [],
  selectedGame: {}
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_GAMES:
       newState.games = action.games;
       break;

    case SELECT_GAME:
       newState.selectedGame = action.selectedGame;
       break;

    default:
       return state;
  }
  return newState;
}
