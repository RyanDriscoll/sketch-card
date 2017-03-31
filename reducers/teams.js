import {SELECT_TEAM } from '../constants';

const initialState = {
    selectedTeam: {}
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case SELECT_TEAM:
      newState.selectedTeam = Object.assign({}, action.selectedTeam);
      break;

    default:
      return state;
  }
  return newState;
}