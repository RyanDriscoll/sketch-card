import {ADD_PATHS} from '../constants';

export const setPaths = (paths, x, y) => {
  return {
    type: ADD_PATHS,
    paths,
    x,
    y
  };
};

export const receivePaths = (paths, x, y) => {
  return dispatch => {
    dispatch(setPaths(paths, x, y));
  };
};

