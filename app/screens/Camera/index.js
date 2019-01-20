import React from 'react'
import { Dimensions, Ionicons, Text, View } from 'react-native'
import { Camera, Permissions } from 'expo'
import AddItemButtonComponent from '../../components/AddItemButton'
import Styles from './styles'

class CameraScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasCameraPermissions: null
    }

    //this.takePic = this.takePic.bind(this)
  }

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({ hasCameraPermissions: true })
  }

  takePic = () => {
    if (this.camera) {
      this.camera.takePictureAsync().then((data) => {
        console.log(JSON.stringify(data))
      })
    } else {

    }
  }

  render () {
    const { hasCameraPermission } = this.state
    const { width } = Dimensions.get('window')

    if (hasCameraPermission === null) {
      return <View />
    }

    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    }

    else {
      return (
        <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center' }}>
          <Camera
            ref={(ref) => { this.camera = ref }}
            style={{ height: width, width: '100%' }}
            type={Camera.Constants.Type.front}
          />
          <AddItemButtonComponent onPressHandlerFunc={this.takePic} />
        </View>
      )
    }
  }
}

export default CameraScreen
