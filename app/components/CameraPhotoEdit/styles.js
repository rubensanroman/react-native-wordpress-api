import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  },

  buttonsContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    width: '100%'
  },

  button: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: 100
  },

  buttonIcon: {
    color: '#fff',
    fontSize: 30,
    marginRight: 10
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },

  buttonRetake: {
    backgroundColor: 'red',
    borderBottomLeftRadius: 10,
    marginRight: 5
  },

  buttonContinue: {
    backgroundColor: 'green',
    borderBottomRightRadius: 10,
    marginLeft: 5
  }
})
