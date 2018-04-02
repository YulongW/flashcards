import { 
  ADD_DECK,
  ADD_CARD,
  RECEIVE_DECKS
} from '../actions/deck'

function deck(state = [], action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        decks: state.decks.concat(action.deck)
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case ADD_CARD:
      const title = action.deck.title
      return {
        ...state,
        decks: state.decks.filter(deck => deck.title != title).concat(action.deck)
      }
    default:
      return state
  }
}

export default deck
