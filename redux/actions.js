import { CHANGE_MODO } from './actionTypes';

export function changeModo(payload) {
  return{
    type: CHANGE_MODO,
    payload
  }
}

