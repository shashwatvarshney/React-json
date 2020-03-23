import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import account from './settings'
import Home from './firstpage'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import {createAppContainer} from 'react-navigation';
// import {Icon} from 'react-native-elements';

import React from 'react';
const Tab = createBottomTabNavigator();


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
          
          <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={account} />
        
        </Tab.Navigator>
        
      );
}
}



function SettingsScreen() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>SettingsScreen</Text>
</View>
);
}




