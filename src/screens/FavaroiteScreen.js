import { View, Button, StyleSheet} from 'react-native'
import React from 'react'

const FavaroiteScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
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

export default FavaroiteScreen;

 