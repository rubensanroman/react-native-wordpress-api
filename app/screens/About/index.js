import React from 'react'
import { Text, View } from 'react-native'

class AboutScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Welcome to the About Screen !</Text>
      </View>
    )
  }
}

export default AboutScreen
