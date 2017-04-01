import axios from 'axios';

import {RECEIVE_GAMES, SELECT_GAME, SELECT_TEAM} from '../constants';

export const receiveGames = (games) => {
  return {
    type: RECEIVE_GAMES,
    games
  };
};

export const selectGame = (selectedGame) => {
  return {
    type: SELECT_GAME,
    selectedGame
  };
};

export const selectTeam = (selectedTeam) => {
  return {
    type: SELECT_TEAM,
    selectedTeam
  };
};

export const receiveTeam = (selectedTeam) => {
  return dispatch => {
    dispatch(selectTeam(selectedTeam));
  };
};

export const getGames = () => {
  return dispatch => {
    return axios.get('/api/games')
      .then((res) => res.data)
      .then((games) => {
        dispatch(receiveGames(games));
      })
      .catch(err => console.error(err));
  };
};
