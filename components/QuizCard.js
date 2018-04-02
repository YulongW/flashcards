import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { commonStyles, colors } from '../utils/styles'

export default class QuizCard extends Component {
  state = {
    showAnswer: false
  }

  toggleAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  render() {
    const { question, answer } = this.props
    const { showAnswer } = this.state

    return (
      <View style={[commonStyles.flex, commonStyles.center]}>
        <Text style={commonStyles.title}>
          {showAnswer ? answer : question}
        </Text>
        <TouchableOpacity onPress={this.toggleAnswer}> 
          <Text style={styles.toggleLink}>
            {showAnswer ? 'Question' : 'Answer'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toggleLink: {
    fontSize: 16,
    color: `${colors.red}`
  }
})
