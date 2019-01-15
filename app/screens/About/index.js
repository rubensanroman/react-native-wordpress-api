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
        <Text style={{ textAlign: 'center' }}>Loadings ...</Text>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{ JSON.stringify(this.state.data) }</Text>
      </View>
    )
  }
}

export default AboutScreen
