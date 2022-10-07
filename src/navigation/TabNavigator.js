import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MainStackNavigator, ContactStackNavigator, ChatStackNavigator, FavaroiteStackNavigator, AddPropertyStackNavigator } from "./StackNavigator";
import AddProperties from "../screens/AddProperties";

import Home from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen"; 

const Tab = createBottomTabNavigator();

 

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />

      <Tab.Screen 
        name="Add Properties" 
        component={AddPropertyStackNavigator}
        options={{
          tabBarStyle: { display: 'none' }
        }}
      />

      <Tab.Screen name="Chat" component={ChatStackNavigator} /> 
      <Tab.Screen  name="Favorite" component={FavaroiteStackNavigator}  /> 
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;