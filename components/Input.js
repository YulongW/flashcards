import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../utils/styles'

const Input = ({
  value,
  placeholder,
  onChangeText,
  style = {} 
}) => (
  <TextInput
    style={[styles.input, style]}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
  />
)

const styles = StyleSheet.create({
  input: {
    marginVertical: 30,
    height: 40,
    borderColor: colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingRight: 15 
  }
})

export default Input