const APP_STORAGE_KEY = 'FLASH_CARD_REDUX_STORE';

import { AsyncStorage } from 'react-native';

export function fetchFromStorage() {
  return AsyncStorage.getItem(APP_STORAGE_KEY)
    .then(data => data === null ? {} : JSON.parse(data))
}

export function saveToStorage(storage) {
  return AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(storage))
}
