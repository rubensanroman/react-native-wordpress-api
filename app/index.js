import React from 'react'
import { Text } from 'react-native'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (
      <Text>Welcome to the Home Screen !</Text>
    )
  }
}

export default HomeScreen
