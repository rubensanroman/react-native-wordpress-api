import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PostService from '../../services/Post'
import ContainerComponent from '../../components/Container'
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

  addItem = () => {
    this.props.navigation.navigate('CAMERA')
  }

  render () {
    return (this.state.isLoading) ? ( <ContainerComponent children={ <PreloaderComponent /> } /> ) : (
      <ContainerComponent>
        {
          <FlatList
            data={ this.state.data }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <PostListItemComponent item={item} />}
            />
        }
        <AddItemButtonComponent onPressHandlerFunc={this.addItem} />
      </ContainerComponent>
    )
  }
}

export default HomeScreen
