import { CHANGE_MODO } from './actionTypes'

const InitialState = {
  modo:'noche',
  modoTitle: 'MODO NOCHE'
}


function rootReducer(state=InitialState, action) {
  if(action.type === CHANGE_MODO) {
    return Object.assign({},state,{
      modo: state.modo === 'noche' ? 'dia': 'noche',
      modoTitle: state.modo === 'noche' ? 'MODO DÍA': 'MODO NOCHE'
    })
    }
  return state
}

export default rootReducer