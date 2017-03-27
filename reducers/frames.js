import {RECEIVE_FRAME } from '../constants';

const initialState = {
  frames: {
  }
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FRAME:
      newState.frames = Object.assign({}, newState.frames, {
        [action.x]: Object.assign({}, newState.frames[action.x], {
          [action.y]: Object.assign({}, newState.frames[action.x][action.y], action.frame)
        })
      });
      break;

    default:
      return state;
  }
  return newState;
}