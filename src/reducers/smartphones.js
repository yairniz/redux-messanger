import { ADD_PHONE } from '../constants/actionTypes';

const smartphone = (state = {}, action) => {
  switch(action.type) {
    case ADD_PHONE:
      return {
        name: action.name,
        tta: action.tta
      };
    default:
      return state;
  }
};

const smartphones = (state = [], action) => {
  switch(action.type) {
    case ADD_PHONE:
      return [
        ...state,
        smartphone(undefined, action)
      ];
    default:
      return state;
  }
};

export default smartphones;
