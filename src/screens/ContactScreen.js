import { View, Button, StyleSheet, Text} from 'react-native'
import React from 'react'

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is a Contact Screen</Text>
       <Button 
          title="Click to open Drawer" 
          onPress={() => navigation.openDrawer()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ContactScreen;

 