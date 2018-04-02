import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import DeckHeader from './DeckHeader'
import Button from './Button'
import { commonStyles } from '../utils/styles'

class DeckList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const deck = params ? params.deck : null
    
    return {
      title: deck ? deck.title : 'Deck Detail'
    }
  };

  startQuiz(deck) {
    this.props.navigation.navigate(
      'Quiz',
      { deck: deck }
    )
  }

  addCard(deck) {
    this.props.navigation.navigate(
      'NewCard',
      { deck: deck }
    )
  }

  render() {
    const { params } = this.props.navigation.state
    const deck = params ? params.deck : null

    return (
      <View style={commonStyles.flex}>
        <DeckHeader deck={deck}/>
        
        <View style={commonStyles.buttonGroup}>
          <View style={commonStyles.flex}>
            <Button onPress={() => this.addCard(deck)}>
              Add Card
            </Button>
          </View>
          <View style={commonStyles.flex}>
            <Button onPress={() => this.startQuiz(deck)}>
              Start Quiz
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(DeckList)
