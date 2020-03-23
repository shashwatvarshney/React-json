import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
          <View style={styles.continer}>
          <View style={styles.account} >
              <TouchableOpacity >
                  <Text style={styles.text}>My account</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.account} >
          <TouchableOpacity >
              <Text style={styles.text}>Manage address</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.account} >
      <TouchableOpacity >
          <Text style={styles.text}>Help</Text>
      </TouchableOpacity>
  </View>
      <View style={styles.account} >
      <TouchableOpacity >
          <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
  </View>
  </View>
      );
}
}
const styles=StyleSheet.create({
    continer:{
        backgroundColor:'#64b5f6',
        flex:1
    },
    account:{
        alignItems:'flex-start',
        paddingLeft:40,
        paddingTop:40,
        // backgroundColor
        
        
    },
    text:{
        fontSize:20
    }
})