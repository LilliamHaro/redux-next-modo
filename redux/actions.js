import { CHANGE_MODO, FILL_DATAAPI, ADD_TO_CAR } from './actionTypes';

export function changeModo(payload) {
  return{
    type: CHANGE_MODO,
    payload
  }
}

export function fillDataApi(payload) {
  return {
    type: FILL_DATAAPI,
    payload
  }
}

export function addToCar(payload) {
  return {
    type: ADD_TO_CAR,
    payload
  }
}

