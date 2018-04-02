import { AsyncStorage } from 'react-native'

const DECK_DATA_KEY = "@FlashCard:decks"

export function getDecks() {
  // return AsyncStorage.removeItem(DECK_DATA_KEY)
  return AsyncStorage.getItem(DECK_DATA_KEY)
    .then(decks => decks ? JSON.parse(decks) : {})
}

export function getDeckArray() {
  return getDecks()
    .then(decks => Object.values(decks))
}

export function getDeck(id) {
  return getDecks().then(decks => decks[id])
}

export function isDeckExist(id) {
  return getDeck(id).then(deck => deck !== undefined)
}

export function addDeck(title) {
  return isDeckExist(title)
    .then(exist => {
      let deck = null;
      if (!exist) {
        deck = {
          title: title,
          questions: []
        }
        AsyncStorage.mergeItem(
          DECK_DATA_KEY,
          JSON.stringify({
            [title]: deck
          })
        )
      }
      console.log('deck', deck)
      return deck
    })
}

export function addCardToDeck(title, card) {
  return getDeck(title)
    .then(deck => {
      console.log(deck)
      deck.questions.push(card)
      AsyncStorage.mergeItem(
        DECK_DATA_KEY,
        JSON.stringify({
          [title]: deck
        })
      )
      return deck
    })
}
