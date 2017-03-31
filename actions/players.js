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
    const homeId = game.homeCity.toLowerCase().split(' ').join('-') + '-' + game.homeName.toLowerCase().split(' ').join('-');
    const awayId = game.awayCity.toLowerCase().split(' ').join('-') + '-' + game.awayName.toLowerCase().split(' ').join('-');
    return axios.all([ axios.get(`/api/team/${homeId}`), axios.get(`/api/team/${homeId}`) ])
      .then(axios.spread(function(home, away) {
        dispatch(selectRosters(home.data, away.data));
      }));
  };
};
