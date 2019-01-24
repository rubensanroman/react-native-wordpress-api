import { StyleSheet } from 'react-native'

const headerHeight = 100
const footerHeight = 80

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  },

  header: {
    height: headerHeight
  },

  main: {
    bottom: footerHeight,
    left: 0,
    position: 'absolute',
    right: 0,
    top: headerHeight
  },

  footer: {
    alignItems: 'center',
    bottom: 0,
    height: footerHeight,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  }
})
