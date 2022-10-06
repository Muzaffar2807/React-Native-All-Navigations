import  React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import { MainStackNavigator } from './src/navigation/StackNavigator';
//import BottomTabNavigator from './src/navigation/TabNavigator'; 
import DrawerNavigator from './src/navigation/DrawerNavigation';

 

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}