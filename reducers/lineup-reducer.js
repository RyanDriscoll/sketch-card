const ADD_LINEUP = 'ADD_LINEUP';
const RECEIVE_TEAM = 'RECEIVE_TEAM'

const initialState = {
  lineup: {},
  team: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LINEUP:
      console.log('DHESDFLHKSDFLKJ')
       return Object.assign({}, state, { lineup: action.lineupObj});
    case RECEIVE_TEAM:
      return Object.assign({}, state, { team: action.team});

    default:
       return state;
  }
}
