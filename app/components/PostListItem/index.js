import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const PostListItemComponent = ({ item }) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{item.title.rendered}</Text>
    <Text style={Styles.content}>{item.content.rendered}</Text>
  </View>
)

export default PostListItemComponent
