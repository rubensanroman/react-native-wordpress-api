import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'
import ContactScreen from './screens/Contact'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Contact: ContactScreen
})

export default createAppContainer(TabNavigator)
