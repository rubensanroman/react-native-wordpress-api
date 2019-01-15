import React from 'react'
import { Text, View } from 'react-native'
import PostService from '../../services/Post'
import ErrorComponent from '../../components/Error'

class AboutScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (this.state.isLoading) ? (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Loading ...</Text>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Welcome to the About Screen !</Text>
      </View>
    )
  }
}

export default AboutScreen
