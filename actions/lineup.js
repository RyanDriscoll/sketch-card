import axios from 'axios';

import {RECEIVE_TEAM, CREATE_LINEUP, SET_INNING, ADD_PLAYER, ADD_LINEUP } from '../constants';

export const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team
  };
};

export const addLineup = (lineup) => {
  return {
    type: ADD_LINEUP,
    lineup
  };
};


export const getTeam = (teamName) => {
  return dispatch => {
    return axios.get('/api/team/name')
      .then((res) => res.data)
      .then((team) => {
        dispatch(receiveTeam(team));
      });
  };
};

export const createLineup = (playerObj) => {
  return {
    type: ADD_LINEUP,
    player: playerObj
  };
};

// export const addUserPermission = (board) => {
//   return dispatch => {
//     return axios.post('/api/boards/permissions', {board})
//       .then((res) => res.data)
//       .then((permission) => {
//         dispatch(receiveNewPermission(permission));
//       });
//   };
// };


// export const getLinup = (team) => {
//   return dispatch => {
//
//     let players
//
//         dispatch(createLinup());
//       });
//   };
// };


export const deleteLinup = (boardId) => (dispatch) => {
  return axios.delete(`/api/boards/${boardId}`)
    .then((res) => res.data)
    .then((board) => {
      dispatch(getAllBoards());
    });
};