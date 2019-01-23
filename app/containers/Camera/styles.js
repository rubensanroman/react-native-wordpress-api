import { StyleSheet } from 'react-native'

const headerHeight = 100

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%'
  },

  header: {
    height: headerHeight
  },

  main: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: headerHeight
  }
})
