import { ADD_PLAYER, ADD_ROSTERS } from '../constants';
import axios from 'axios';


export const selectPlayer = (player, team, order) => {
  return {
    type: ADD_PLAYER,
    player,
    team,
    order
  };
};

export const selectRosters = (home, away) => {
  return {
    type: ADD_ROSTERS,
    home,
    away
  };
};

export const receivePlayer = (player, team, order) => {
  return dispatch => {
    dispatch(selectPlayer(player, team, order));
  };
};

export const getRosters = (game) => {
  return dispatch => {
    return axios.all([ axios.get(`/api/team/${game.homeId}`), axios.get(`/api/team/${game.awayId}`) ])
      .then(axios.spread(function(home, away) {
        dispatch(selectRosters(home.data, away.data));
      }))
      .catch(err => console.error(err));
  };
};
