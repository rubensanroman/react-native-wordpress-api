import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import PostService from '../../services/Post'
import ContainerComponent from '../../components/Container'
import PreloaderComponent from '../../components/Preloader'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.getAllPosts()
  }

  getAllPosts () {
    PostService.getAll(this.dataDidLoad, this.dataDidError)

    this.setState({ isLoading: true })
  }

  dataDidLoad = (response) => {
    this.setState({ data: response.data, isLoading: false })
  }

  dataDidError = (error) => {
    console.log('Ups! Hubo un fucking error!')

    this.setState({ isLoading: false })
  }

  render () {
    return (this.state.isLoading) ? ( <ContainerComponent children={ <PreloaderComponent /> } /> ) : (
      <ContainerComponent>
        {
          <FlatList
            data={ this.state.data }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
              <View>
                <Text>{item.title.rendered}</Text>
                <Text>{item.content.rendered}</Text>
              </View>
            }
            />
        }
      </ContainerComponent>
    )
  }
}

export default HomeScreen
