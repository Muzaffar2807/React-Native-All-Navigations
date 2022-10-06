import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator, ChatStackNavigator, FavaroiteStackNavigator } from "./StackNavigator";

import Home from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen"; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Chat" component={ChatStackNavigator} /> 
      <Tab.Screen name="Favorite" component={FavaroiteStackNavigator} /> 
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;