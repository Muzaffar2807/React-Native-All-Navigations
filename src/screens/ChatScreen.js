import { View, Text, Button } from 'react-native'
import React from 'react'

const ChatScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Chat</Text>
     <Button title='Click TO Open Drawer' onPress={() => navigation.openDrawer()}/>
  </View>
  )
}

export default ChatScreen