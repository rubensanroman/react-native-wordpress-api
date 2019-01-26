import React from 'react'
import { AsyncStorage, Image, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Styles from './styles'
import AppContainer from '../../containers/App'
import AuthService from '../../services/Auth'

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

    AuthService.getToken(wpCredentials, this.tokenDidSave, this.tokenDidError)
  }

  tokenDidSave = (response) => {
    const thisComp = this

    AsyncStorage.setItem('authToken', response.data.token, function (val) {
      thisComp.setState({ isLoading: false })

      thisComp.props.navigation.navigate('HOME')
    })
  }

  tokenDidError = (error) => {
    console.error(error.response.data.code.split(' ')[1])
  }

  render () {
    return (
      <AppContainer>
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
      </AppContainer>
    )
  }
}

export default LoginScreen
