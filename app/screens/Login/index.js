import React from 'react'
import { AsyncStorage, Image, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Styles from './styles'
import ContainerComponent from '../../components/Container'
import ApiAuthService from '../../services/ApiAuth'

class LoginScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoading: false,
      password: '',
      username: ''
    }
  }

  login = () => {
    let wpCredentials = {
      username: this.state.username,
      password: this.state.password
    }

    this.setState({ isLoading: true })

    ApiAuthService.getAuthToken(wpCredentials, this.tokenDidSave, this.tokenDidError)
  }

  tokenDidSave = (response) => {
    const Cmp = this

    AsyncStorage.setItem('authToken', response.data.token, function (val) {
      Cmp.setState({ isLoading: false })

      Cmp.props.navigation.navigate('HOME')
    })
  }

  tokenDidError = (error) => {
    console.error(error)
  }

  render () {
    return (
      <ContainerComponent>
        <View style={Styles.loginBox}>
          <Image
            source={require('./image-wordpress-logo.png')}
            style={Styles.wordpressLogo}
          />
          <TextInput
            keyboardType='default'
            onChangeText = {(username) => {this.setState({username})}}
            placeholder='Username'
            style={Styles.textInput}
            value={this.state.username}
          />
          <TextInput
            keyboardType='default'
            onChangeText = {(password) => {this.setState({password})}}
            placeholder='Password'
            secureTextEntry
            style={Styles.textInput}
            value={this.state.password}
          />
          <TouchableHighlight
            onPress={this.login}
            style={Styles.button}
          >
            { this.state.isLoading ? (
              <Image
                source={require('./image-preloader.gif')}
                style={Styles.preloader}
              />
            ) : (
              <Text style={Styles.buttonText}>Login</Text>
            )}
          </TouchableHighlight>
        </View>
      </ContainerComponent>
    )
  }
}

export default LoginScreen
