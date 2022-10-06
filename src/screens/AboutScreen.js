import { View, Button } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button 
          title="Click to open Drawer" 
          onPress={() => navigation.openDrawer()}
        />
   </View>
  )
}

export default AboutScreen