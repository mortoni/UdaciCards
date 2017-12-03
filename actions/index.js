export const ADD_DECK = 'ADD_DECK';

export const addDeck = (deck) => (dispatch, getStore) => {
  const lastId = getStore().deck.lastId;
  dispatch({
    type: ADD_DECK,
    deck: {
      ...deck,
      id: lastId+1,
    },
  })
}
