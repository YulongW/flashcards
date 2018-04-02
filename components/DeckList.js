import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import sort from 'lodash.sortby'

import { getDeckArray } from '../utils/api'
import { receiveDecks } from '../actions/deck'
import DeckHeader from './DeckHeader'
import { commonStyles } from '../utils/styles'

class DeckList extends Component {
  state = {
    ready: false,
  }
  
  componentDidMount() {
    getDeckArray().then(decks => {
      let sortedDecks = sort(Object.values(decks), ['title'])
      this.props.receiveDecks(sortedDecks)
      this.setState({ready: true})
    })
  }

  navigateToDeckDetail(deck) {
    this.props.navigation.navigate(
      'DeckDetail',
      { deck: deck }
    )
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />
    }

    if (this.props.decks.length === 0) {
      return (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <Button
            title="Click here to add your first deck 👋"
            onPress={() => this.props.navigation.navigate('NewDeck')}
          />
        </View>
      )
    } else {
      return (
        <ScrollView style={commonStyles.flex}>
          {this.props.decks && this.props.decks.map(deck => (
            <TouchableOpacity
              style={commonStyles.borderBottom}
              key={deck.title}
              onPress={() => this.navigateToDeckDetail(deck)}
            >
              <DeckHeader deck={deck}/>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks
})

const mapDispatchToProps = (dispatch) => ({
  receiveDecks: (decks) => dispatch(receiveDecks(decks))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList)
