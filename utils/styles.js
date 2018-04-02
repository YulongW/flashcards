import { StyleSheet } from 'react-native'

export const colors = {
  themeColor: '#333',
  borderColor: '#ccc',
  green: '#008000',
  red: '#D4271B'
}

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '600'
  },
  borderBottom: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  buttonGreen: {
    backgroundColor: colors.green
  },
  buttonRed: {
    backgroundColor: colors.red
  }
})
