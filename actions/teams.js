import {SELECT_TEAM} from '../constants';

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
