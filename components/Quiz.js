import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from './Button'
import QuizCard from './QuizCard'

import { commonStyles } from '../utils/styles'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

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

  goBack = () => {
    this.props.navigation.goBack()
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    const deck = params ? params.deck : null

    this.setState({
      questions: deck.questions,
      index: 0,
      score: 0
    })

    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { questions, index, score } = this.state

    if (questions.length === 0) {
      return (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <Text style={commonStyles.title}>Please add questions before starting a quiz.</Text>
        </View>
      )
    }

    if (questions.length === index) {
      const score = this.state.score
      const total = this.state.questions.length

      return (
        <View style={commonStyles.flex}>
          <View style={[commonStyles.flex, commonStyles.center]}>
            <Text style={commonStyles.title}>You answered {score} out of {total} questions correctly!</Text>
          </View>
          <View style={commonStyles.buttonGroup}>
            <View style={commonStyles.flex}>
              <Button onPress={this.resetQuiz}>
                Restart Quiz
              </Button>
            </View>
            <View style={commonStyles.flex}>
              <Button onPress={() => this.goBack()}>
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
