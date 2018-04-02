import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from './Button'
import QuizCard from './QuizCard'
import { commonStyles } from '../utils/styles'

export default class Quiz extends Component {
  static navigationOptions = ({
    title: 'Quiz'
  })

  state = {
    questions: [],
    index: 0,
    score: 0
  }

  markCorrect = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
      score: prevState.score + 1
    }))
  }

  markIncorrect = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1
    }))
  }

  resetQuiz = () => {
    this.setState({
      index: 0,
      score: 0
    })
  }

  navigateToDeckDetail = () => {
    this.props.navigation.navigate(
      'DeckList'
    )
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    const deck = params ? params.deck : null

    this.setState({
      questions: deck.questions,
      index: 0,
      score: 0
    })
  }

  render() {
    const { questions, index, score } = this.state

    if (questions.length === 0) {
      return (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <Text>No question.</Text>
        </View>
      )
    }

    if (questions.length === index) {
      const score = this.state.score
      const total = this.state.questions.length

      return (
        <View style={commonStyles.flex}>
          <View style={[commonStyles.flex, commonStyles.center]}>
            <Text>You answered {score} out of {total} questions correctly!</Text>
          </View>
          <View style={commonStyles.buttonGroup}>
            <View style={commonStyles.flex}>
              <Button onPress={this.resetQuiz}>
                Restart Quiz
              </Button>
            </View>
            <View style={commonStyles.flex}>
              <Button onPress={() => this.navigateToDeckDetail()}>
                Back to Deck
              </Button>
            </View>
          </View>
        </View>
      )
    }

    const { question, answer } = questions[index]

    return (
      <View style={commonStyles.flex}>
        <QuizCard question={question} answer={answer} />

        <View style={commonStyles.buttonGroup}>
          <View style={commonStyles.flex}>
            <Button style={commonStyles.buttonGreen} onPress={this.markCorrect}>
              Correct
            </Button>
          </View>
          <View style={commonStyles.flex}>
            <Button style={commonStyles.buttonRed} onPress={this.markIncorrect}>
              Incorrect
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
