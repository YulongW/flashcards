import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/styles'

const Button = ({
  children,
  onPress,
  style = {} 
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.button, style]}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    padding: 20,
    height: 60,
    textAlign: 'center',
    backgroundColor: colors.themeColor,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Button