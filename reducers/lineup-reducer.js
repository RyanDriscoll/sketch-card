const ADD_LINEUP = 'ADD_LINUP';

const initialState = {
  lineup: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LINEUP:
       return Object.assign({}, state, { lineup: action.lineup});
    default:
       return state;
  }
}
