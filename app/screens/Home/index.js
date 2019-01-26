import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PostsService from '../../services/Posts'
import AppContainer from '../../containers/App'
import PreloaderComponent from '../../components/Preloader'
import PostListItemComponent from '../../components/PostListItem'
import AddItemButtonComponent from '../../components/AddItemButton'

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
    PostsService.getAll(this.dataDidLoad, this.dataDidError)

    this.setState({ isLoading: true })
  }

  dataDidLoad = (response) => {
    this.setState({ data: response.data, isLoading: false })
  }

  dataDidError = (error) => {
    console.log('Ups! Hubo un fucking error!')

    this.setState({ isLoading: false })
  }

  addItem = () => {
    this.props.navigation.navigate('CAMERA_PHOTO_TAKE')
  }

  render () {
    return (this.state.isLoading) ? ( <AppContainer children={ <PreloaderComponent /> } /> ) : (
      <AppContainer>
        {
          <FlatList
            data={ this.state.data }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <PostListItemComponent item={item} />}
            />
        }
        <AddItemButtonComponent onPressHandlerFunc={this.addItem} />
      </AppContainer>
    )
  }
}

export default HomeScreen
