import {ADD_PATHS, NEXT_FRAME, PREVIOUS_FRAME} from '../constants';

//Home Team
export const setPaths = (team, paths, x, y) => {
  return {
    type: ADD_PATHS,
    team,
    paths,
    x,
    y
  };
};

export const nextFrame = (newFrame) => {
  return {
    type: NEXT_FRAME,
    newFrame
  };
};

export const previousFrame = (prevFrame) => {
  return {
    type: PREVIOUS_FRAME,
    prevFrame
  };
};

export const receivePaths = (team, paths, x, y) => {
      return dispatch => {
      dispatch(setPaths(team, paths, x, y));
    };
  }