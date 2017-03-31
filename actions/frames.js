import {ADD_PATHS, NEXT_FRAME, PREVIOUS_FRAME} from '../constants';

export const setPaths = (paths, x, y) => {
  return {
    type: ADD_PATHS,
    paths,
    x,
    y
  };
};

export const nextFrame = (newFrame) => {
  type:NEXT_FRAME,
  newFrame;
};

export const previousFrame = (prevFrame) => {
  type:PREVIOUS_FRAME,
  prevFrame;
};

export const receivePaths = (paths, x, y) => {
  return dispatch => {
    dispatch(setPaths(paths, x, y));
  };
};
