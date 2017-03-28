import {SET_FRAME } from '../constants';

const initialState = {
  frames: {
    1: {1:[]}
  }
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_FRAME:
    console.log('newState.frames',newState.frames)
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