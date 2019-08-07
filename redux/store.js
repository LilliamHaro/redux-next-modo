import { createStore } from 'redux'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

const store= createStore(rootReducer,persistedState ) 

store.subscribe(() => {
  saveState({
    modo: store.getState().modo,
    modoTitle: store.getState().modoTitle,
    dataApi: store.getState().dataApi,
  buyCar: store.getState().buyCar,
  });
});

export default store