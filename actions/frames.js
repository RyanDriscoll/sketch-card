import {SET_FRAME} from '../constants';

export const setFrame = (frame, x, y) => {
  console.log('in receiveFrame')
  return {
    type: SET_FRAME,
    frame,
    x,
    y
  };
};

export const receiveFrame = (frame, x, y) => {
  return dispatch => {
    dispatch(setFrame(frame, x, y));
  };
};

