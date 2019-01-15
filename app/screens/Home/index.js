import React from 'react'
import { Button, Text, View } from 'react-native'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Welcome to the Home Screen !</Text>
        <Button onPress={() => this.props.navigation.navigate('Contact')} title='Ir a Contact!' />
      </View>
    )
  }
}

export default HomeScreen
