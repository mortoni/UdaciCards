import { combineReducers } from 'redux';

import {
    ADD_DECK,
} from '../actions';

const defaultDeck = {
  list: [0, 1],
  refById: {
    0: {
      title: 'React',
      cards: [0, 1],
      id: 0,
    },
    1: {
      title: 'Javascript',
      cards: [2],
      id: 1,
    }
  },
  lastId: 1,
};

const deck = (state = defaultDeck, action) => {
    switch (action.type) {
        case ADD_DECK: {
            const lastId = action.deck.id;
            const list = state.list.concat(lastId);
            const refById = {
                ...state.refById,
                [lastId]: {
                    ...action.deck,
                    cards: [],
                    id: lastId,
                }
            }
        }
        default:
            return state;
    }
}

export default combineReducers({ deck })
