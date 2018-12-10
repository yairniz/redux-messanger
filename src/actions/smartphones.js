import { ADD_PHONE } from '../constants/actionTypes';

export const addPhone = (dispatch, name, tta) => dispatch({
  type: ADD_PHONE,
  name,
  tta
});