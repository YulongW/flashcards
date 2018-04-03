import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator, Navigator } from 'react-navigation'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import { colors, commonStyles } from './utils/styles'
import { setLocalNotification } from './utils/helpers'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECKS',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 60,
      paddingVertical: 6,
      backgroundColor: colors.themeColor,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  NewCard: {
    screen: NewCard
  },
  DeckDetail: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.themeColor
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})

const FlashCardStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={commonStyles.flex}>
          <FlashCardStatusBar
            backgroundColor={colors.themeColor}
            barStyle='light-content'
          />
          <MainNavigator />
        </View >
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight
  }
})
