import { StyleSheet } from 'react-native'

const headerHeight = 100
const footerHeight = 80
const leftSpace = 10
const rightSpace = 10

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  },

  header: {
    alignItems: 'center',
    height: headerHeight,
    left: leftSpace,
    justifyContent: 'center',
    position: 'absolute',
    right: rightSpace,
    top: 0
  },

  main: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    bottom: footerHeight,
    left: leftSpace,
    position: 'absolute',
    right: rightSpace,
    top: headerHeight
  },

  footer: {
    alignItems: 'center',
    bottom: 0,
    height: footerHeight,
    left: leftSpace,
    justifyContent: 'center',
    position: 'absolute',
    right: rightSpace
  }
})
