import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Ups ! Something went terribly wrong !</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title='Go back Home !' />
      </View>
    )
  }
}

export default ErrorScreen
