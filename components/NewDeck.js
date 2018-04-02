import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, Alert } from 'react-native'

import Button from './Button'
import Input from './Input'

import { addDeck } from '../utils/api'
import { addDeck as addDeckAction } from '../actions/deck'
import { commonStyles } from '../utils/styles'

class NewDeck extends Component {
  state = {
    text: ''
  }

  submitNewDeck = () => {
    const title = this.state.text.trim()
    if (title) {
      addDeck(title)
        .then(deck => {
          if (deck) {
            Alert.alert(`Deck ${title} has been created`)
            this.props.addDeck(deck)
          } else {
            Alert.alert(`The deck with title ${title} exists`)
          }
        })
    } else {
      Alert.alert(`Title is required`)
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={commonStyles.title}>
          What is the title of your new deck?
        </Text>

        <Input
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Deck Title'
        />
        
        <Button onPress={this.submitNewDeck}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks
})

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(addDeckAction(deck))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30
  }
})