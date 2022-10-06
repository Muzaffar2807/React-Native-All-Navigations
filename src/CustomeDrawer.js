import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function DrawerContent({ navigation }) {
  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView 
 
       
      >
        
        <View style={{ flex: 1,   paddingTop: 10, color: '#fff' }}>
          <Pressable  
            onPress={() => navigation.goBack("Home")}
            style={{ backgroundColor: '#9AC4F8', padding: 8 ,   margin: 5}}
          >
            <Text style={{ color: '#fff' }}>Home</Text>
          </Pressable>

          <Pressable  
            onPress={() => navigation.navigate('Contact')}
            style={{ backgroundColor: '#9AC4F8', padding: 8 ,margin : 5}}
          >
            <Text style={{ color: '#fff' }}>Contact</Text>
          </Pressable>

          <Pressable  
            onPress={() => navigation.navigate('Chat')}
            style={{ backgroundColor: '#9AC4F8', padding: 8 ,margin : 5}}
          >
            <Text style={{ color: '#fff' }}>Chat</Text>
          </Pressable>

          <Pressable  
            onPress={() => navigation.navigate('Favorite')}
            style={{ backgroundColor: '#9AC4F8', padding: 8 ,margin : 5}}
          >
            <Text style={{ color: '#fff' }}>Favaroite</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
      
    </View>
  );
}

export default DrawerContent;
