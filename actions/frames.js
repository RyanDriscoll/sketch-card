import {ADD_PATHS_HOME, ADD_PATHS_AWAY, NEXT_FRAME, PREVIOUS_FRAME} from '../constants';

//Home Team
export const setPathsHome = (paths, x, y) => {
  return {
    type: ADD_PATHS_HOME,
    paths,
    x,
    y
  };
};

//Away Team
export const setPathsAway = (paths, x, y) => {
  return {
    type: ADD_PATHS_AWAY,
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
  if (team === 'home'){
      return dispatch => {
      dispatch(setPathsHome(paths, x, y));
    };
  }
    else {
    return dispatch => {
      dispatch(setPathsAway(paths, x, y));
    };
  }
};
