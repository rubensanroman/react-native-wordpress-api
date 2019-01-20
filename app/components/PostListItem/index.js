import React from 'react'
import { Text, View } from 'react-native'
import HTML from 'react-native-render-html'
import Styles from './styles'

const PostListItemComponent = ({ item }) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{item.title.rendered}</Text>
    <HTML html={item.content.rendered} />
  </View>
)

export default PostListItemComponent
