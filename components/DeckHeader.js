import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DeckHeader = ({
  deck
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{deck.title}</Text>
    <Text style={styles.num}>{deck.questions.length} cards</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 4
  },
  num: {
    fontSize: 16,
    color: 'gray'
  }
})

export default DeckHeader
