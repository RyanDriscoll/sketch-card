const ADD_LINEUP = 'ADD_LINUP';
const RECEIVE_TEAM = 'RECEIVE_TEAM'

const initialState = {
  lineup: [],
  team: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LINEUP:
       return Object.assign({}, state, { lineup: action.lineup});
    case RECEIVE_TEAM:
      return Object.assign({}, state, { team: action.team});

    default:
       return state;
  }
}
