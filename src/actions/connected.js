import { CONNECT, DISCONNECT } from '../constants/actionTypes';

export const phoneConnect = (dispatch, payload) => dispatch({
  type: CONNECT,
  payload
});

export const phoneDisconnect = (dispatch, payload) => dispatch({
  type: DISCONNECT,
  payload
});