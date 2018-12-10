import { ADD_MESSAGE, MARK_RECEIVED, MARK_SEEN } from '../constants/actionTypes';

let runningIndex = 0;

const recipientsList = (state = [], action) => {
  if (!action.from || state.indexOf(action.from) > -1) return state;
  return [ ...state, action.from ];
};

const message = (state = {}, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        id: runningIndex++,
        from: action.from,
        text: action.payload,
        seen: recipientsList(undefined, {}),
        received: recipientsList(undefined, {}),
      };
    case MARK_SEEN:
      if (state.id !== action.id) return state;
      const newState2 = { ...state, seen: recipientsList(state.seen, action)};

      return newState2;
    case MARK_RECEIVED:
      if (state.id !== action.id) return state;
      const newState = { ...state, received: recipientsList(state.received, action)};

      return newState;
    default:
      return state;
  }

};

const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ];
    case MARK_SEEN:
    case MARK_RECEIVED:
      return state.map((m) => message(m, action));
    default:
      return state;
  }
};

export default messages;