import React from 'react'
import { Text, View } from 'react-native'
import PostService from '../../services/Post'
import ErrorComponent from '../../components/Error'

class AboutScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount () {
    PostService.getOneById(1, this.dataDidLoad, this.dataDiderror)
  }

  dataDidLoad = (data) => {
    this.setState({ data, isLoading: false })
  }

  dataDidError = () => {
    this.setState({ data: <ErrorComponent />, isLoading: false })
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
