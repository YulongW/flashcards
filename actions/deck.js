export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const addDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

export const receiveDecks = (decks) => ({
  type: RECEIVE_DECKS,
  decks
})

export const addCard = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card
})