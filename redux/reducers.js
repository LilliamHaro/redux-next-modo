import { CHANGE_MODO, FILL_DATAAPI, ADD_TO_CAR } from "./actionTypes";


const InitialState = {
  modo: "noche",
  modoTitle: "MODO NOCHE",
  dataApi: [],
  buyCar: []
};

function rootReducer(state = InitialState, action) {
  if (action.type === CHANGE_MODO) {
    return Object.assign({}, state, {
      modo: state.modo === "noche" ? "dia" : "noche",
      modoTitle: state.modo === "noche" ? "MODO DÍA" : "MODO NOCHE"
    });
  }

  if (action.type === FILL_DATAAPI) {
    return Object.assign({}, state, {
      dataApi: action.payload
    });
  }

  if (action.type === ADD_TO_CAR) {
    return Object.assign({}, state, {
      buyCar: state.buyCar.concat(action.payload)
    });
  }

  return state;
}



export default rootReducer;
