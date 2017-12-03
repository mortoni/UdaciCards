import { combineReducers } from 'redux';

import {
    ADD_DECK,
} from '../actions';

const deck = (state = {}, action) => {
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
                },
            }
        }
    }
}
