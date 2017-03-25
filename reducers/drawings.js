const SAVE_DRAWING= 'SAVE_DRAWING';

const initialState = {
  drawings: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_DRAWING: 
       return Object.assign({}, state, { drawings: action.drawings});
    default: 
       return state;
  }
}

//something
