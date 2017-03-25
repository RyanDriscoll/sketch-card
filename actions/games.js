import axios from 'axios';

import {RECEIVE_GAMES, SELECT_GAME} from '../constants';

export const receiveGames = (games) => {
  return {
    type: RECEIVE_GAMES,
    games
  };
};

export const selectGame = (gameObj) => {
  return {
    type: SELECT_GAME,
    selectedGame: gameObj
  };
};

export const getGames = () => {
  return dispatch => {
    return axios.get('/api/games')
      .then((res) => res.data)
      .then((games) => {
        dispatch(receiveGames(games));
      });
  };
};
