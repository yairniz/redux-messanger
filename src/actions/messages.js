import { ADD_MESSAGE, MARK_RECEIVED, MARK_SEEN } from '../constants/actionTypes';

export const addMessage = (dispatch, payload, from) => dispatch({
  type: ADD_MESSAGE,
  payload,
  from
});

export const markSeen = (dispatch, id, from) => dispatch({
  type: MARK_SEEN,
  id,
  from
});

export const markReceived = (dispatch, id, from) => dispatch({
  type: MARK_RECEIVED,
  id,
  from
});
