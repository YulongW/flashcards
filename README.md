# Mobile Flashcards
 
## Overview
**Mobile Flashcards** is a mobile application (tested on iOS) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks. Here are some specific requirements:

  * Use create-react-native-app to build your project
  * Allow users to create a deck which can hold an unlimited number of cards
  * Allow users to add a card to a specific deck
  * The front of the card should display the question
  * The back of the card should display the answer
  * Users should be able to quiz themselves on a specific deck and receive a score once they're done
  * Users should receive a notification to remind themselves to study if they haven't already for that day

## How-to
* Install all project dependencies with `yarn install`
* Start the development server with `yarn start`
* Use Expo on iOS to connect the app

## Development Notes
* Initially I was going to implement this project without using redux, it turned out to be very hard.
* More practice is needed.

## Potential Improvements
* Use redux for adding flashcard and quiz
* Add support to allow adding multiple flashcards instead of one at a time

## Create React App
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).