import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, KeyboardAvoidingView, Text, TextInput, StyleSheet, Alert } from 'react-native'

import Button from './Button'
import Input from './Input'
import DeckHeader from './DeckHeader'

import { addCardToDeck } from '../utils/api'
import { commonStyles } from '../utils/styles'
import { addCard } from '../actions/deck'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  submitNewCard = (deck) => {
    const question = this.state.question.trim()
    const answer = this.state.answer.trim()

    if (!question) {
      Alert.alert(`Question is required`)
    } else if (!answer) {
      Alert.alert(`Answer is required`)
    } else {
      const card = {
        question,
        answer
      }
      addCardToDeck(deck.title, card)
        .then((deck) => {
          this.props.addCard(deck, card)
          Alert.alert(`New card has been added to deck ${deck.title}`)
        })
    }
  }

  render() {
    const { params } = this.props.navigation.state
    const deck = params ? params.deck : null

    return (
      <KeyboardAvoidingView behavior='padding' style={commonStyles.flex}>
        <DeckHeader deck={deck}/>

        <View style={styles.subContainer}>
          <Input
            style={styles.input}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder='Question'
          />

          <Input
            style={styles.input}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder='Answer'
          />
        </View>
        
        <Button onPress={() => this.submitNewCard(deck)}>
          Add Card
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks
})

const mapDispatchToProps = (dispatch) => ({
  addCard: (deck, card) => dispatch(addCard(deck, card))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCard)

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 30
  }
})