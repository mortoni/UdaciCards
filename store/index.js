import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { saveToStorage, fetchFromStorage } from '../utils/api';

export const initStore = () => fetchFromStorage().then(storeData => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
      reducer,
      storeData,
      composeEnhancers(applyMiddleware(thunk))
  )

  const saveStorageHandler = () => {
    saveToStorage(store.getState())
  }

  const unsubscribe = store.subscribe(saveStorageHandler)

  const unmountStore = () => {
    unsubscribe()
    saveStorageHandler()
  }

  return { store, unmountStore }
})
