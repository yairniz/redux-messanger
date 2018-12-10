import { CONNECT, DISCONNECT } from '../constants/actionTypes';

const connected = (state = {}, action) => {
  switch(action.type) {
    case CONNECT:
      return { ...state, [action.payload]: true }
    case DISCONNECT:
      const disConnectState = { ...state };
      delete disConnectState[action.payload];
      return disConnectState;
    default:
      return state;
  }
};

export default connected;