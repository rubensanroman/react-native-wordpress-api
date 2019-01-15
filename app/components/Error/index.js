import React from 'react'
import { Button, Text, View } from 'react-native'

const ErrorComponent = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ textAlign: 'center' }}>Ups ! Something went terribly wrong !</Text>
    <Button onPress={() => this.props.navigation.navigate('Home')} title='Go back Home !' />
  </View>
)

export default ErrorComponent
