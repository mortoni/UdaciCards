import { combineReducers } from 'redux';

import {
    ADD_CARD_TO_DESK,
    ADD_DECK,
    LOAD_FROM_STORAGE,
    REMOVE_CARD_FROM_DESK,
    REMOVE_DECK
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

const defaultCard = {
    list: [0, 1, 2],
    refById: {
        0: {
            id: 0,
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        1: {
            id: 1,
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        },
        2: {
            id: 2,
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
    },
    lastId: 2,
}

const deck = (state = defaultDeck, action) => {
    switch (action.type) {
        case LOAD_FROM_STORAGE: return { ...action.storage.desk }
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
            return {
                ...state,
                lastId,
                list,
                refById,
            }
        }
        case ADD_CARD_TO_DESK: {
            const { id } = action.deck;
            const deck = state.refById[id];
            return {
                ...state,
                refById: {
                    ...state.refById,
                    [id]: {
                        ...deck,
                        cards: deck.cards.concat(action.card.id),
                    }
                }
            }
        }
        default: return state;
    }
}

const card = (state = defaultCard, action) => {
    switch (action.type) {
        case LOAD_FROM_STORAGE: return { ...action.storage.card }
        case ADD_CARD_TO_DESK: {
            const lastId = action.card.id;
            const list = state.list.concat(lastId);
            const refById = {
                ...state.refById,
                [lastId]: {
                    ...action.card,
                    id: lastId,
                },
            }
            return {
                ...state,
                lastId,
                list,
                refById,
            }
        }
        default: return state;
    }
}

export default combineReducers({ deck, card })
