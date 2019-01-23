import { StyleSheet } from 'react-native'

const footerHeight = 80

export default StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },

  main: {
    bottom: footerHeight,
    position: 'absolute',
    top: 0,
    width: '100%'
  },

  camera: {
    height: '100%',
    width: '100%'
  },

  image: {
    height: '100%',
    width: '100%',
  },

  footer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: footerHeight,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },

  takePhotoButton: {
    height: 50,
    width: 50
  },

  takePhotoIcon: {
    color: 'white',
    fontSize: 60,
    left: 0,
    marginTop: -5,
    position: 'absolute',
    top: 0
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#f00',
    color: '#f00',
    justifyContent: 'center',
    width: 'auto'
  },

  buttonRetake: {
    alignSelf: 'flex-start'
  },

  buttonContinue: {
    borderWidth: 10,
    borderColor: 'blue',
    alignSelf: 'flex-end'
  },

  buttonIcon: {
    color: 'white'
  },

  buttonText: {
    color: 'white'
  }
})
