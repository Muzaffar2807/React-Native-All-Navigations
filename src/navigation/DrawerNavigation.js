
import React from "react";

import { createDrawerNavigator, } from "@react-navigation/drawer";

import { ChatStackNavigator, ContactStackNavigator, MainStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Home from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen"; 
import CustomDrawer from '../CustomeDrawer'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{ drawerType: "front", headerShown: false}}
      
    >
      <Drawer.Screen name="HomeScreen" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;