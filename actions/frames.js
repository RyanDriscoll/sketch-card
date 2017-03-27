import {RECEIVE_FRAME} from '../constants';

export const receiveFrame = (frame, x, y) => {
  return {
    type: RECEIVE_FRAME,
    frame,
    x,
    y
  };
};
